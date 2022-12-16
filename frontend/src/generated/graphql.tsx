import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename?: 'Mutation';
  createSoftSkill: SoftSkill;
};


export type MutationCreateSoftSkillArgs = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  softSkills?: Maybe<Array<SoftSkill>>;
};

export type SoftSkill = {
  __typename?: 'SoftSkill';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SoftSkillFragment = { __typename?: 'SoftSkill', id: string, name: string, description?: string | null };

export type CreateSoftSkillMutationVariables = Exact<{
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;


export type CreateSoftSkillMutation = { __typename?: 'Mutation', softSkill: { __typename?: 'SoftSkill', id: string, name: string, description?: string | null } };

export type SoftSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type SoftSkillsQuery = { __typename?: 'Query', softSkills?: Array<{ __typename?: 'SoftSkill', id: string, name: string, description?: string | null }> | null };

export const SoftSkillFragmentDoc = gql`
    fragment SoftSkill on SoftSkill {
  id
  name
  description
}
    `;
export const CreateSoftSkillDocument = gql`
    mutation createSoftSkill($name: String!, $description: String) {
  softSkill: createSoftSkill(name: $name, description: $description) {
    ...SoftSkill
  }
}
    ${SoftSkillFragmentDoc}`;
export type CreateSoftSkillMutationFn = Apollo.MutationFunction<CreateSoftSkillMutation, CreateSoftSkillMutationVariables>;

/**
 * __useCreateSoftSkillMutation__
 *
 * To run a mutation, you first call `useCreateSoftSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSoftSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSoftSkillMutation, { data, loading, error }] = useCreateSoftSkillMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateSoftSkillMutation(baseOptions?: Apollo.MutationHookOptions<CreateSoftSkillMutation, CreateSoftSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSoftSkillMutation, CreateSoftSkillMutationVariables>(CreateSoftSkillDocument, options);
      }
export type CreateSoftSkillMutationHookResult = ReturnType<typeof useCreateSoftSkillMutation>;
export type CreateSoftSkillMutationResult = Apollo.MutationResult<CreateSoftSkillMutation>;
export type CreateSoftSkillMutationOptions = Apollo.BaseMutationOptions<CreateSoftSkillMutation, CreateSoftSkillMutationVariables>;
export const SoftSkillsDocument = gql`
    query softSkills {
  softSkills {
    ...SoftSkill
  }
}
    ${SoftSkillFragmentDoc}`;

/**
 * __useSoftSkillsQuery__
 *
 * To run a query within a React component, call `useSoftSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSoftSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSoftSkillsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSoftSkillsQuery(baseOptions?: Apollo.QueryHookOptions<SoftSkillsQuery, SoftSkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SoftSkillsQuery, SoftSkillsQueryVariables>(SoftSkillsDocument, options);
      }
export function useSoftSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SoftSkillsQuery, SoftSkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SoftSkillsQuery, SoftSkillsQueryVariables>(SoftSkillsDocument, options);
        }
export type SoftSkillsQueryHookResult = ReturnType<typeof useSoftSkillsQuery>;
export type SoftSkillsLazyQueryHookResult = ReturnType<typeof useSoftSkillsLazyQuery>;
export type SoftSkillsQueryResult = Apollo.QueryResult<SoftSkillsQuery, SoftSkillsQueryVariables>;