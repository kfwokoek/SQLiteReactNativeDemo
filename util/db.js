import * as SQLite from 'expo-sqlite';


export async function initDbSetup() {
    const db = await SQLite.openDatabaseAsync('userDb');
    // `execAsync()` is useful for bulk queries when you want to execute altogether.
    // Please note that `execAsync()` does not escape parameters and may lead to SQL injection.
    await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL, username TEXT NOT NULL, name TEXT NOT NULL, email TEXT NOT NULL, age INTEGER NOT NULL, date TEXT NOT NULL);
    INSERT INTO user (username, name, email, age, date) VALUES ('testUsername', 'testName', 'testEmail', 0, 'testDate');
    `);
}

export async function submitChanges(username, name, email, age, date, setUser) {
    const db = await SQLite.openDatabaseAsync('userDb');

    await db.runAsync('UPDATE user SET username = ?, name = ?, email = ?, age = ?, date = ?', [username, name, email, age, date.toISOString()]);
    
    const firstRow = await db.getFirstAsync('SELECT * FROM user');
    console.log('thing', firstRow.id, firstRow.username, firstRow.name, firstRow.email, firstRow.age, firstRow.date);

    setUser({
        username: firstRow.username,
        name: firstRow.name,
        email: firstRow.email,
        age: firstRow.age,
        date: new Date(firstRow.date)
    });

}