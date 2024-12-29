// This file is auto-generated by @hey-api/openapi-ts

export type Login = {
    email?: string;
};

export type Question = {
    answer?: string;
    description?: string;
    id?: number;
    is_open?: boolean;
    question?: string;
};

export type QuestionList = {
    questions?: Array<Question>;
};

export type User = {
    created_at?: string;
    designed_question_id?: Array<(string)>;
    email?: string;
    first_name?: string;
    id?: number;
    is_active?: boolean;
    last_name?: string;
};

export type UserCreate = {
    email: string;
    first_name: string;
    last_name: string;
};

export type UserDelete = {
    email: string;
};

export type UserUpdate = {
    current_email: string;
    first_name?: string;
    last_name?: string;
    new_email?: string;
};

export type OptionsApiLoginUsersData = {
    body?: Login;
};

export type OptionsApiLoginUsersResponse = (Login);

export type PostApiLoginUsersData = {
    body?: Login;
};

export type PostApiLoginUsersResponse = (Login);

export type OptionsApiQuestionCreateQuestionsData = {
    body?: QuestionList;
};

export type OptionsApiQuestionCreateQuestionsResponse = (Array<Question>);

export type PostApiQuestionCreateQuestionsData = {
    body?: QuestionList;
};

export type PostApiQuestionCreateQuestionsResponse = (Array<Question>);

export type GetApiQuestionQuestionsResponse = (Array<Question>);

export type OptionsApiQuestionQuestionsResponse = (Array<Question>);

export type OptionsApiUserCreateUserData = {
    body?: UserCreate;
};

export type OptionsApiUserCreateUserResponse = (User);

export type PostApiUserCreateUserData = {
    body?: UserCreate;
};

export type PostApiUserCreateUserResponse = (User);

export type DeleteApiUserDeleteUserData = {
    body?: UserDelete;
};

export type DeleteApiUserDeleteUserResponse = (User);

export type OptionsApiUserDeleteUserData = {
    body?: UserDelete;
};

export type OptionsApiUserDeleteUserResponse = (User);

export type OptionsApiUserUpdateUserData = {
    body?: UserUpdate;
};

export type OptionsApiUserUpdateUserResponse = (User);

export type PatchApiUserUpdateUserData = {
    body?: UserUpdate;
};

export type PatchApiUserUpdateUserResponse = (User);

export type GetApiUserUserByEmailData = {
    email: string;
};

export type GetApiUserUserByEmailResponse = (User);

export type OptionsApiUserUserByEmailData = {
    email: string;
};

export type OptionsApiUserUserByEmailResponse = (User);

export type GetApiUserUsersResponse = (Array<User>);

export type OptionsApiUserUsersResponse = (Array<User>);