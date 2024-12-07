// This file is auto-generated by @hey-api/openapi-ts

import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type { OptionsApiUserCreateUserData, OptionsApiUserCreateUserResponse, PostApiUserCreateUserData, PostApiUserCreateUserResponse, DeleteApiUserDeleteUserByUserIdData, DeleteApiUserDeleteUserByUserIdResponse, OptionsApiUserDeleteUserByUserIdData, OptionsApiUserDeleteUserByUserIdResponse, OptionsApiUserUpdateUserByUserIdData, OptionsApiUserUpdateUserByUserIdResponse, PatchApiUserUpdateUserByUserIdData, PatchApiUserUpdateUserByUserIdResponse, GetApiUserUsersResponse, OptionsApiUserUsersResponse } from './types.gen';

export class UsersService {
    /**
     * Create the users
     * @param data The data for the request.
     * @param data.body
     * @returns User
     * @throws ApiError
     */
    public static optionsApiUserCreateUser(data: OptionsApiUserCreateUserData = {}): CancelablePromise<OptionsApiUserCreateUserResponse> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/user/create_user',
            body: data.body
        });
    }
    
    /**
     * Create the users
     * @param data The data for the request.
     * @param data.body
     * @returns User
     * @throws ApiError
     */
    public static postApiUserCreateUser(data: PostApiUserCreateUserData = {}): CancelablePromise<PostApiUserCreateUserResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/create_user',
            body: data.body
        });
    }
    
    /**
     * Delete the users
     * @param data The data for the request.
     * @param data.userId
     * @param data.body
     * @returns User
     * @throws ApiError
     */
    public static deleteApiUserDeleteUserByUserId(data: DeleteApiUserDeleteUserByUserIdData): CancelablePromise<DeleteApiUserDeleteUserByUserIdResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user/delete_user/{user_id}',
            path: {
                user_id: data.userId
            },
            body: data.body
        });
    }
    
    /**
     * Delete the users
     * @param data The data for the request.
     * @param data.userId
     * @param data.body
     * @returns User
     * @throws ApiError
     */
    public static optionsApiUserDeleteUserByUserId(data: OptionsApiUserDeleteUserByUserIdData): CancelablePromise<OptionsApiUserDeleteUserByUserIdResponse> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/user/delete_user/{user_id}',
            path: {
                user_id: data.userId
            },
            body: data.body
        });
    }
    
    /**
     * Update the users
     * @param data The data for the request.
     * @param data.userId
     * @param data.body
     * @returns User
     * @throws ApiError
     */
    public static optionsApiUserUpdateUserByUserId(data: OptionsApiUserUpdateUserByUserIdData): CancelablePromise<OptionsApiUserUpdateUserByUserIdResponse> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/user/update_user/{user_id}',
            path: {
                user_id: data.userId
            },
            body: data.body
        });
    }
    
    /**
     * Update the users
     * @param data The data for the request.
     * @param data.userId
     * @param data.body
     * @returns User
     * @throws ApiError
     */
    public static patchApiUserUpdateUserByUserId(data: PatchApiUserUpdateUserByUserIdData): CancelablePromise<PatchApiUserUpdateUserByUserIdResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/user/update_user/{user_id}',
            path: {
                user_id: data.userId
            },
            body: data.body
        });
    }
    
    /**
     * Retrieve the users
     * @returns User
     * @throws ApiError
     */
    public static getApiUserUsers(): CancelablePromise<GetApiUserUsersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/users'
        });
    }
    
    /**
     * Retrieve the users
     * @returns User
     * @throws ApiError
     */
    public static optionsApiUserUsers(): CancelablePromise<OptionsApiUserUsersResponse> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/user/users'
        });
    }
    
}