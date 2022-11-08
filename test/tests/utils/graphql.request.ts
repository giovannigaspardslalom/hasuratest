import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  _nlike?: InputMaybe<Scalars['String']>;
  _nsimilar?: InputMaybe<Scalars['String']>;
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todo" */
  delete_todo?: Maybe<Todo_Mutation_Response>;
  /** delete single row from the table: "todo" */
  delete_todo_by_pk?: Maybe<Todo>;
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<Todo_Mutation_Response>;
  /** insert a single row into the table: "todo" */
  insert_todo_one?: Maybe<Todo>;
  /** update data of the table: "todo" */
  update_todo?: Maybe<Todo_Mutation_Response>;
  /** update single row of the table: "todo" */
  update_todo_by_pk?: Maybe<Todo>;
};


/** mutation root */
export type Mutation_RootDelete_TodoArgs = {
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todo_OneArgs = {
  object: Todo_Insert_Input;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodoArgs = {
  _inc?: InputMaybe<Todo_Inc_Input>;
  _set?: InputMaybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_By_PkArgs = {
  _inc?: InputMaybe<Todo_Inc_Input>;
  _set?: InputMaybe<Todo_Set_Input>;
  pk_columns: Todo_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};


/** query root */
export type Query_RootTodoArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


/** query root */
export type Query_RootTodo_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "todo" */
  todo: Array<Todo>;
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate;
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>;
};


/** subscription root */
export type Subscription_RootTodoArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_Order_By>>;
  where?: InputMaybe<Todo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars['Int'];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todo" */
export type Todo = {
  __typename?: 'todo';
  completed: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  task: Scalars['String'];
};

/** aggregated selection of "todo" */
export type Todo_Aggregate = {
  __typename?: 'todo_aggregate';
  aggregate?: Maybe<Todo_Aggregate_Fields>;
  nodes: Array<Todo>;
};

/** aggregate fields of "todo" */
export type Todo_Aggregate_Fields = {
  __typename?: 'todo_aggregate_fields';
  avg?: Maybe<Todo_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Todo_Max_Fields>;
  min?: Maybe<Todo_Min_Fields>;
  stddev?: Maybe<Todo_Stddev_Fields>;
  stddev_pop?: Maybe<Todo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todo_Stddev_Samp_Fields>;
  sum?: Maybe<Todo_Sum_Fields>;
  var_pop?: Maybe<Todo_Var_Pop_Fields>;
  var_samp?: Maybe<Todo_Var_Samp_Fields>;
  variance?: Maybe<Todo_Variance_Fields>;
};


/** aggregate fields of "todo" */
export type Todo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Todo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todo" */
export type Todo_Aggregate_Order_By = {
  avg?: InputMaybe<Todo_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Todo_Max_Order_By>;
  min?: InputMaybe<Todo_Min_Order_By>;
  stddev?: InputMaybe<Todo_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Todo_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Todo_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Todo_Sum_Order_By>;
  var_pop?: InputMaybe<Todo_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Todo_Var_Samp_Order_By>;
  variance?: InputMaybe<Todo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "todo" */
export type Todo_Arr_Rel_Insert_Input = {
  data: Array<Todo_Insert_Input>;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};

/** aggregate avg on columns */
export type Todo_Avg_Fields = {
  __typename?: 'todo_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "todo" */
export type Todo_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Todo_Bool_Exp>>>;
  _not?: InputMaybe<Todo_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Todo_Bool_Exp>>>;
  completed?: InputMaybe<Boolean_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  task?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todo" */
export enum Todo_Constraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for incrementing integer column in table "todo" */
export type Todo_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "todo" */
export type Todo_Insert_Input = {
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  task?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Todo_Max_Fields = {
  __typename?: 'todo_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  task?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "todo" */
export type Todo_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  task?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Todo_Min_Fields = {
  __typename?: 'todo_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  task?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "todo" */
export type Todo_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  task?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "todo" */
export type Todo_Mutation_Response = {
  __typename?: 'todo_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todo>;
};

/** input type for inserting object relation for remote table "todo" */
export type Todo_Obj_Rel_Insert_Input = {
  data: Todo_Insert_Input;
  on_conflict?: InputMaybe<Todo_On_Conflict>;
};

/** on conflict condition type for table "todo" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint;
  update_columns: Array<Todo_Update_Column>;
  where?: InputMaybe<Todo_Bool_Exp>;
};

/** ordering options when selecting data from "todo" */
export type Todo_Order_By = {
  completed?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  task?: InputMaybe<Order_By>;
};

/** primary key columns input for table: "todo" */
export type Todo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "todo" */
export enum Todo_Select_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Task = 'task'
}

/** input type for updating data in table "todo" */
export type Todo_Set_Input = {
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  task?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Todo_Stddev_Fields = {
  __typename?: 'todo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "todo" */
export type Todo_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Todo_Stddev_Pop_Fields = {
  __typename?: 'todo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "todo" */
export type Todo_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Todo_Stddev_Samp_Fields = {
  __typename?: 'todo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "todo" */
export type Todo_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Todo_Sum_Fields = {
  __typename?: 'todo_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "todo" */
export type Todo_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "todo" */
export enum Todo_Update_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Task = 'task'
}

/** aggregate var_pop on columns */
export type Todo_Var_Pop_Fields = {
  __typename?: 'todo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "todo" */
export type Todo_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Todo_Var_Samp_Fields = {
  __typename?: 'todo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "todo" */
export type Todo_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Todo_Variance_Fields = {
  __typename?: 'todo_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "todo" */
export type Todo_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'query_root', todo: Array<{ __typename?: 'todo', id: number, task: string, completed: boolean }> };

export type AddTodoMutationVariables = Exact<{
  task?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['Boolean']>;
}>;


export type AddTodoMutation = { __typename?: 'mutation_root', insert_todo_one?: { __typename?: 'todo', task: string } | null };


export const GetTodosDocument = gql`
    query GetTodos {
  todo {
    id
    task
    completed
  }
}
    `;
export const AddTodoDocument = gql`
    mutation AddTodo($task: String = "", $completed: Boolean = false) {
  insert_todo_one(object: {task: $task, completed: $completed}) {
    task
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetTodos(variables?: GetTodosQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTodosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTodosQuery>(GetTodosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTodos', 'query');
    },
    AddTodo(variables?: AddTodoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddTodoMutation>(AddTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddTodo', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;