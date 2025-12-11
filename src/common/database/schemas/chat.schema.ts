import { mysqlTable, bigint, text } from 'drizzle-orm/mysql-core';

import { user } from './auth.schema';

export const chat = mysqlTable('chat', {
  chatId: bigint('id', { mode: 'bigint' }).primaryKey().autoincrement(),
  userId: bigint('user_id', { mode: 'bigint' })
    .notNull()
    .references(() => user.userId, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
  message: text('message'),
});
