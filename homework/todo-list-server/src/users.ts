import { hash, genSalt, compare } from 'bcryptjs';
import mysql, { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { DBOptions } from './db.conf';

export interface User {
  id: number;
  username: string;
  pswd: string;
}

export async function hashPswd(pswd: string): Promise<string> {
  const salt = await genSalt(10);
  const hashPswd: string = await hash(pswd, salt);
  return Promise.resolve(hashPswd);
}

async function userExists(username: string): Promise<boolean> {
  const dbConn = await mysql.createConnection(DBOptions as any);

  const [results] = await dbConn.query<RowDataPacket[]>(
    'SELECT EXISTS(SELECT id FROM users WHERE username = ?) as userExists',
    [username]
  );
  dbConn.end();

  return Promise.resolve(results[0].userExists === 1);
}

export async function CreateUser(username: string, pswd: string) {
  if (await userExists(username)) {
    return Promise.reject(409);
  }

  const pswdHash = await hashPswd(pswd);

  const dbConn = await mysql.createConnection(DBOptions as any);
  const [results] = await dbConn.query<ResultSetHeader>(
    'INSERT INTO `users` (`id`,`username`, `pswd`) VALUES ( (SELECT MAX(id)+1 FROM users as t1), ?, ?)',
    [username, pswdHash]
  );

  dbConn.end();
  return Promise.resolve(results.affectedRows === 1);
}

export async function getUser(username: string): Promise<User> {
  const dbConn = await mysql.createConnection(DBOptions as any);
  const [results] = await dbConn.query<RowDataPacket[]>('SELECT id, username, pswd FROM users where username = ?', [
    username,
  ]);

  if (results.length != 1) {
    Promise.reject('No user found');
  }

  dbConn.end();
  const user: User = {
    id: results[0].id,
    username: results[0].username,
    pswd: results[0].pswd,
  };
  return Promise.resolve(user);
}

export async function validatePassword(username: string, password: string): Promise<boolean> {
  const user = await getUser(username);

  const valid = await compare(password, user.pswd);

  return Promise.resolve(valid);
}
