import * as actions from './index'
const GET_LIST_USER =  "GET_LIST_USER";
describe('actions', () => {
  it('GET_LIST_USER action in redux', () => {
    const dataUser =  [
            {
                "id": 1,
                "uuid": "29eec077-0ef9-408d-9f42-6b236808a235",
                "personId": 1,
                "person": {
                    "id": 1,
                    "uuid": "5779ade0-6ba2-4e7f-9300-c9ccf2769ec5",
                    "prefix": null,
                    "race": null,
                    "fullName": "sysadmin",
                    "gender": "MALE",
                    "birthDate": null,
                    "address": null,
                    "district": null,
                    "city": null,
                    "country": null
                },
                "username": "sysadmin",
                "email": "info@itechcorp.com.vn",
                "emailVerified": false,
                "phoneNumber": "0359516686",
                "phoneVerified": false,
                "roles": [
                    {
                        "id": "sysadmin",
                        "name": "System Administrator"
                    }
                ],
                "updatable": false,
                "enabled": true
            },
            {
                "id": 6,
                "uuid": "ed83797e-5ccf-44da-8098-5a9d726e4a28",
                "personId": 2,
                "person": {
                    "id": 2,
                    "uuid": "828c65ce-80aa-46ff-8145-76c0d29418e4",
                    "prefix": "Mr.",
                    "race": "Kinh",
                    "fullName": "Trần Hà Nguyên",
                    "gender": "MALE",
                    "birthDate": null,
                    "address": null,
                    "district": null,
                    "city": "Hà Nội",
                    "country": "Việt Nam"
                },
                "username": "itechadmin",
                "email": "nguyen.tran@itechcorp.com.vn",
                "emailVerified": true,
                "phoneNumber": "0359516681",
                "phoneVerified": true,
                "roles": [
                    {
                        "id": "manage_resources",
                        "name": "Resources Manager"
                    }
                ],
                "updatable": true,
                "enabled": true
            },
            {
                "id": 23,
                "uuid": "4b99ed63-0a98-4c1e-86e7-36072501a609",
                "personId": 15,
                "person": {
                    "id": 15,
                    "uuid": "1084e56e-d101-4af5-b335-a832a5b70668",
                    "prefix": null,
                    "race": null,
                    "fullName": "Nguyễn Huy Đức 8",
                    "gender": "MALE",
                    "birthDate": "1995-02-09T08:13:25.264+0000",
                    "address": "Hà Tĩnh",
                    "district": "Can Lộc",
                    "city": "Hà Tĩnh",
                    "country": "Việt Nam"
                },
                "username": "duc.nguyen1",
                "email": "duc.nguyen@itechcorp.com.vn",
                "emailVerified": true,
                "phoneNumber": "0123456789",
                "phoneVerified": true,
                "roles": [
                    {
                        "id": "sysadmin",
                        "name": "System Administrator"
                    }
                ],
                "updatable": true,
                "enabled": true
            },
            {
                "id": 26,
                "uuid": "e4b74f9b-bc8e-4d2e-b038-368f7274df2c",
                "personId": 9,
                "person": {
                    "id": 9,
                    "uuid": "1aa4489d-bd97-4109-a3af-6e482725965f",
                    "prefix": null,
                    "race": null,
                    "fullName": "Nguyễn Huy Đức 2",
                    "gender": "MALE",
                    "birthDate": "1995-02-09T08:13:25.264+0000",
                    "address": "Hà Tĩnh",
                    "district": "Can Lộc",
                    "city": "Hà Tĩnh",
                    "country": "Việt Nam"
                },
                "username": "duc.nguyen9",
                "email": "duc.nguyen@itechcorp.com.vn",
                "emailVerified": true,
                "phoneNumber": "0123456789",
                "phoneVerified": true,
                "roles": [
                    {
                        "id": "sysadmin",
                        "name": "System Administrator"
                    }
                ],
                "updatable": true,
                "enabled": true
            },
            {
                "id": 27,
                "uuid": "3dd04d51-6772-4067-8744-4e3387f3ad1e",
                "personId": 10,
                "person": null,
                "username": "duc.nguyen10",
                "email": "duc.nguyen@itechcorp.com.vn",
                "emailVerified": true,
                "phoneNumber": "0123456789",
                "phoneVerified": true,
                "roles": [
                    {
                        "id": "sysadmin",
                        "name": "System Administrator"
                    }
                ],
                "updatable": true,
                "enabled": true
            },
            {
                "id": 28,
                "uuid": "ed2a3685-a864-4f62-8080-f0a44bfe3ad6",
                "personId": 11,
                "person": null,
                "username": "duc.nguyen11",
                "email": "duc.nguyen@itechcorp.com.vn",
                "emailVerified": true,
                "phoneNumber": "0123456789",
                "phoneVerified": true,
                "roles": [
                    {
                        "id": "sysadmin",
                        "name": "System Administrator"
                    }
                ],
                "updatable": true,
                "enabled": true
            },
            {
                "id": 29,
                "uuid": "048316c3-82c0-4cba-9d02-087b14310639",
                "personId": 12,
                "person": {
                    "id": 12,
                    "uuid": "b4d86838-da77-4bac-b71e-e1567402a0b8",
                    "prefix": "MR",
                    "race": null,
                    "fullName": "Nguyễn Huy Đức 5",
                    "gender": "FEMALE",
                    "birthDate": "1995-02-09T08:13:25.264+0000",
                    "address": "Hà Tĩnh",
                    "district": "Can Lộc",
                    "city": "Hà Tĩnh",
                    "country": "Việt Nam"
                },
                "username": "duc.nguyen12",
                "email": "duc.nguyen@itechcorp.com.vn",
                "emailVerified": true,
                "phoneNumber": "0123456789",
                "phoneVerified": true,
                "roles": [
                    {
                        "id": "sysadmin",
                        "name": "System Administrator"
                    }
                ],
                "updatable": true,
                "enabled": true
            },
            {
                "id": 30,
                "uuid": "56873e1e-8bd2-4803-b54e-df6d4376842b",
                "personId": 13,
                "person": null,
                "username": "duc.nguyen13",
                "email": "duc.nguyen@itechcorp.com.vn",
                "emailVerified": true,
                "phoneNumber": "0123456789",
                "phoneVerified": true,
                "roles": [
                    {
                        "id": "sysadmin",
                        "name": "System Administrator"
                    }
                ],
                "updatable": true,
                "enabled": true
            },
            {
                "id": 31,
                "uuid": "66477b49-037a-48b0-a972-d4e4301467c5",
                "personId": 14,
                "person": {
                    "id": 14,
                    "uuid": "183120b1-0725-4582-957c-02216b3a6e9c",
                    "prefix": null,
                    "race": null,
                    "fullName": "Nguyễn Huy Đức 7",
                    "gender": "MALE",
                    "birthDate": "1995-02-09T08:13:25.264+0000",
                    "address": "Hà Tĩnh",
                    "district": "Can Lộc",
                    "city": "Hà Tĩnh",
                    "country": "Việt Nam"
                },
                "username": "duc.nguyen14",
                "email": "duc.nguyen@itechcorp.com.vn",
                "emailVerified": true,
                "phoneNumber": "0123456789",
                "phoneVerified": true,
                "roles": [
                    {
                        "id": "sysadmin",
                        "name": "System Administrator"
                    }
                ],
                "updatable": true,
                "enabled": true
            },
            {
                "id": 32,
                "uuid": "c06195cd-658e-4a6e-8a8b-854eb55a6f26",
                "personId": 15,
                "person": {
                    "id": 15,
                    "uuid": "1084e56e-d101-4af5-b335-a832a5b70668",
                    "prefix": null,
                    "race": null,
                    "fullName": "Nguyễn Huy Đức 8",
                    "gender": "MALE",
                    "birthDate": "1995-02-09T08:13:25.264+0000",
                    "address": "Hà Tĩnh",
                    "district": "Can Lộc",
                    "city": "Hà Tĩnh",
                    "country": "Việt Nam"
                },
                "username": "duc.nguyen15",
                "email": "duc.nguyen@itechcorp.com.vn",
                "emailVerified": true,
                "phoneNumber": "0123456789",
                "phoneVerified": true,
                "roles": [
                    {
                        "id": "sysadmin",
                        "name": "System Administrator"
                    }
                ],
                "updatable": true,
                "enabled": true
            }
        ]
    const expectedAction = {
      type: GET_LIST_USER,
      dataUser
    }
    expect(actions.getListUer(dataUser)).toEqual(expectedAction)
  })
})