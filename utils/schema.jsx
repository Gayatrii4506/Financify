import {
    integer,numeric,pgTable,serial,varchar
} from 'drizzle-orm/pg-core'


//budget schema
export const budgets = pgTable('budgets', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    amount: numeric('amount').notNull(),
    Icon: varchar('icon'),
    createdBy: varchar('createdBy').notNull(),
});

//income schema
export const Incomes = pgTable('incomes', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    amount: numeric('amount').notNull(),
    Icon: varchar('icon'),
    createdBy: varchar('createdBy').notNull(),
});

//expense schema
export const Expenses = pgTable('expenses', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    amount: numeric('amount').notNull(),
    createdBy: varchar('createdBy').notNull(),
    budgetId: integer('budgetId').references(() => budgets.id)
});