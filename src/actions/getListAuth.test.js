import * as actions from './index'
const GET_LIST_AUTH =  "GET_LIST_AUTH";
describe('actions', () => {
  it('GET_LIST_AUTH action in redux', () => {
    const dataAuth = [
        {
            "id": "client_edit",
            "uuid": "5ba19b1c-ca22-4f92-9bdf-08723d802bdd",
            "description": null
        },
        {
            "id": "person_delete",
            "uuid": "63e8d805-9d7d-4cc5-9d61-64d6a3c10abd",
            "description": null
        },
        {
            "id": "dicom_get",
            "uuid": "fc0589e7-7c6c-4c9c-8979-69395804fa2f",
            "description": null
        },
        {
            "id": "role_edit",
            "uuid": "6587fa11-847c-4e27-9fa7-842f19a67b4a",
            "description": null
        },
        {
            "id": "center_get",
            "uuid": "6f748953-d2e0-4913-a2b8-e6ce809f87af",
            "description": null
        },
        {
            "id": "group_template_add",
            "uuid": "52b111dc-5046-4b48-9e3a-99cc308bdc0a",
            "description": null
        },
        {
            "id": "radiologist_group_add",
            "uuid": "1225fb54-fe0d-402c-88c0-ea926f07890c",
            "description": null
        },
        {
            "id": "user_edit",
            "uuid": "d3b91d78-8b9e-447d-ae3c-4c398cc6ccc1",
            "description": null
        },
        {
            "id": "group_template_edit",
            "uuid": "1ad0f2f4-58c1-40e8-b723-d71d3f441b3f",
            "description": null
        },
        {
            "id": "get_dicom_studies",
            "uuid": "c1e683b0-ea04-404c-91fe-45254a99aaed",
            "description": "get_dicom_studies"
        },
        {
            "id": "authority_delete",
            "uuid": "ce865d4a-8ad6-4f11-b15d-e798e9079264",
            "description": null
        },
        {
            "id": "get_provider_staffs",
            "uuid": "8673f544-14b2-416c-9f3a-3ce884357ba5",
            "description": "get_provider_staffs"
        },
        {
            "id": "radiologist_template_edit",
            "uuid": "459bf79d-3748-4a09-8a76-f75fe3c4f525",
            "description": null
        },
        {
            "id": "delete_rented_studies",
            "uuid": "a4da70ed-48bc-431c-960f-8ed83166a6c9",
            "description": "delete_rented_studies"
        },
        {
            "id": "get_rented_studies",
            "uuid": "dd9b6078-4c99-40e5-974c-2dbe0071ac38",
            "description": "get_rented_studies"
        },
        {
            "id": "radiologist_template_add",
            "uuid": "6f90aef7-7e0c-475d-a9c9-5cdb9eef2645",
            "description": null
        },
        {
            "id": "center_add",
            "uuid": "42ccd392-8a18-4f70-9b90-13c93659e132",
            "description": null
        },
        {
            "id": "client_get_all",
            "uuid": "d2c36ba6-b7a2-4a90-8134-8588181d15ef",
            "description": null
        },
        {
            "id": "sysadmin",
            "uuid": "2dead9e3-6e09-4260-88fc-00f406a56e69",
            "description": "system admin test thoi"
        },
        {
            "id": "manage_providers",
            "uuid": "ccdc248e-ea8b-4bc1-b4e6-f4165cb025a3",
            "description": "manage_providers"
        },
        {
            "id": "group_template_delete",
            "uuid": "e606bc7d-4589-4e2e-8bf8-abe8d8a5da6d",
            "description": null
        },
        {
            "id": "radiologist_get",
            "uuid": "499ac7f1-a809-47d8-9bb6-6f1626dae543",
            "description": null
        },
        {
            "id": "order_get",
            "uuid": "c5f3b1ef-e894-4cbd-836b-972b4a200a76",
            "description": null
        },
        {
            "id": "resource_delete",
            "uuid": "73046afd-8d64-4712-98fc-6a1a991d8ebf",
            "description": null
        },
        {
            "id": "radiologist_template_get",
            "uuid": "9f267062-2c4e-4f90-a821-3c8a3bcfa6c3",
            "description": null
        },
        {
            "id": "radiologist_group_get_all",
            "uuid": "16c173b8-20fe-494e-a0bb-7e80e12ab39f",
            "description": null
        },
        {
            "id": "radiologist_manage",
            "uuid": "d20cb241-1ccf-41ac-8970-e00a567323d4",
            "description": null
        },
        {
            "id": "authority_edit",
            "uuid": "3e8e98fc-565d-48c3-9973-8b74046842af",
            "description": null
        },
        {
            "id": "group_template_get",
            "uuid": "9f4ad7f6-c3b9-4a79-8077-f1841caee596",
            "description": null
        },
        {
            "id": "user_get",
            "uuid": "31910fcd-ac19-4b6b-9d58-6a12805d0738",
            "description": null
        },
        {
            "id": "test_add",
            "uuid": "ac1eaee1-8812-4c2f-9078-89f4f54bf952",
            "description": ""
        },
        {
            "id": "radiologist_add",
            "uuid": "914ef6f9-dd5f-46c2-a368-2d2d90660126",
            "description": null
        },
        {
            "id": "authority_get_all",
            "uuid": "497de5fe-0ec0-4986-9114-25afd98ca2dd",
            "description": null
        },
        {
            "id": "person_add",
            "uuid": "177cabd0-c9d4-402d-b129-46699a217d94",
            "description": null
        },
        {
            "id": "get_modality_rentals",
            "uuid": "5a3ee9f4-9683-4166-99b9-e7f3cd8d88e5",
            "description": "get_modality_rentals"
        },
        {
            "id": "order_edit",
            "uuid": "e7542f36-dca4-4a56-8ef3-7faa3d9418a7",
            "description": null
        },
        {
            "id": "authority_add",
            "uuid": "5a54c194-8dde-4d07-b9d0-ba95d066c0be",
            "description": null
        },
        {
            "id": "report_get",
            "uuid": "f824602d-09a4-4ee8-badd-03b6f993b393",
            "description": null
        },
        {
            "id": "manage_modality",
            "uuid": "5fad77e7-636b-4f16-bd4b-1ddec6e8b0c1",
            "description": "Manage Modality"
        },
        {
            "id": "center_staff_get_all",
            "uuid": "b605f1d1-db3b-451a-893d-9027e460bfb1",
            "description": null
        },
        {
            "id": "radiologist_group_get",
            "uuid": "42e0cb5b-2236-4216-bdac-9844266828d0",
            "description": null
        },
        {
            "id": "client_add",
            "uuid": "10479efc-ed26-4e72-80ed-05438cddf9ef",
            "description": null
        },
        {
            "id": "get_modality_rental_staffs",
            "uuid": "f151332c-efbe-4189-a304-21f575a8ae64",
            "description": "get_modality_rental_staffs"
        },
        {
            "id": "manage_modality_rentals",
            "uuid": "11b2b6df-f492-4c58-8a12-8c8528158d59",
            "description": "manage_modality_rentals"
        },
        {
            "id": "order_delete",
            "uuid": "af806e84-9f08-4dca-852b-2c55c945c85f",
            "description": null
        },
        {
            "id": "resource_get_all",
            "uuid": "b673a660-24e3-4796-8393-03a0b515b1dd",
            "description": null
        },
        {
            "id": "manage_rental",
            "uuid": "e97751fc-a0e8-483b-8f1b-792cd70201ca",
            "description": "Manage Rental"
        },
        {
            "id": "person_get",
            "uuid": "7bbbdac1-c7bf-4b46-ba3a-4c758077978c",
            "description": null
        },
        {
            "id": "center_staff_get",
            "uuid": "c7f9ca1c-4b60-4fa3-9932-dbce7d20d7e6",
            "description": null
        },
        {
            "id": "role_get",
            "uuid": "181dc590-da23-4f95-9c12-614023abba3d",
            "description": null
        },
        {
            "id": "add_rented_studies",
            "uuid": "1819d4c3-aeba-451f-a756-ea0e238dcc25",
            "description": "add_rented_studies"
        },
        {
            "id": "person_edit",
            "uuid": "f337bb7d-6aa7-46f0-a545-c863089af58b",
            "description": null
        },
        {
            "id": "report_get_all",
            "uuid": "98a2eb75-d08b-4d93-a1b4-359a491f639e",
            "description": null
        },
        {
            "id": "radiologist_template_delete",
            "uuid": "67b84503-d27c-4be2-9695-b2798aff3fbd",
            "description": null
        },
        {
            "id": "radiologist_get_all",
            "uuid": "2b4b9335-380e-4002-8334-de3ea6c97ca8",
            "description": null
        },
        {
            "id": "radiologist_group_edit",
            "uuid": "0d7f9565-c292-495e-9c98-039b00f8edf8",
            "description": null
        },
        {
            "id": "report_edit",
            "uuid": "6c929f74-4b41-4449-9beb-ae6543ec5557",
            "description": null
        },
        {
            "id": "get_providers",
            "uuid": "604496cf-9d1f-4f41-add5-b5ff5919228f",
            "description": "get_providers"
        },
        {
            "id": "radiologist_edit",
            "uuid": "3f75e421-97e6-4cd2-a9da-9b8a06d2e01b",
            "description": null
        },
        {
            "id": "manage_modality_rental_staffs",
            "uuid": "ce242ca3-d2a6-4281-909f-40fb28c62b95",
            "description": "manage_modality_rental_staffs"
        },
        {
            "id": "group_template_get_all",
            "uuid": "7c7b5b63-68bd-4d52-8a24-78cf5afca1ed",
            "description": null
        },
        {
            "id": "resource_add",
            "uuid": "34ad3f1f-5a72-4e77-a345-0c0b8c995511",
            "description": null
        },
        {
            "id": "manage_provider_staffs",
            "uuid": "f99ead37-81d5-4755-8a7b-b4c6ddbe6512",
            "description": "manage_provider_staffs"
        },
        {
            "id": "center_get_all",
            "uuid": "526b0e3b-e3c8-4c36-8f04-986c65bcbdac",
            "description": null
        },
        {
            "id": "client_get",
            "uuid": "45a415ed-5557-49d4-8535-7689298b2e97",
            "description": null
        },
        {
            "id": "order_get_all",
            "uuid": "b68a70c1-3bb1-4459-a6ce-2040cac90494",
            "description": null
        },
        {
            "id": "manage_rented_modalities",
            "uuid": "bb02c100-6e8f-4969-bacb-c06607052929",
            "description": "manage_rented_modalities"
        },
        {
            "id": "get_rented_modalities",
            "uuid": "78c2ba5b-b22d-448c-a488-8c4862be60d4",
            "description": "get_rented_modalities"
        },
        {
            "id": "user_add",
            "uuid": "38c0673f-89cb-4940-ac7d-d29167114a5a",
            "description": null
        },
        {
            "id": "center_staff_add",
            "uuid": "0a88cec3-2be7-483e-9349-0320cbd6391c",
            "description": null
        },
        {
            "id": "resource_edit",
            "uuid": "137006ca-7f6b-4f9b-851a-e58cad0a9599",
            "description": null
        },
        {
            "id": "report_add",
            "uuid": "8345091c-8230-4068-b362-894bebf2d4f7",
            "description": null
        },
        {
            "id": "center_staff_delete",
            "uuid": "94912602-8ea1-48db-853d-9c83597bd369",
            "description": null
        },
        {
            "id": "client_delete",
            "uuid": "529d687a-ef62-4d8f-b687-cc5a942eeb34",
            "description": null
        },
        {
            "id": "radiologist_group_delete",
            "uuid": "95451de4-dd3f-4aca-9c70-398288a92679",
            "description": null
        },
        {
            "id": "edit_rented_studies",
            "uuid": "116058fa-a5aa-4248-9712-a60d32446e81",
            "description": "edit_rented_studies"
        },
        {
            "id": "center_staff_edit",
            "uuid": "f9eeed00-74f4-430b-ac09-ded08faf4da2",
            "description": null
        },
        {
            "id": "role_get_all",
            "uuid": "ea6e9b8a-c803-4746-ab87-e75d6d553f3b",
            "description": null
        },
        {
            "id": "authority_get",
            "uuid": "47f6b972-5469-4a22-b4ac-08c51f71f3ff",
            "description": null
        },
        {
            "id": "role_add",
            "uuid": "2f7685b0-d1e3-4631-9f0c-3225ce817482",
            "description": null
        },
        {
            "id": "radiologist_delete",
            "uuid": "ee342e1f-953d-4436-8aa6-c4e7b06ffa88",
            "description": null
        },
        {
            "id": "test_xoa",
            "uuid": "a9d3a980-5f10-4a24-9143-5b76cfc1e1aa",
            "description": "test_xoa"
        },
        {
            "id": "radiologist_group_manage",
            "uuid": "9bfef392-9d7c-4f72-b875-bf95780dd5a6",
            "description": null
        },
        {
            "id": "user_delete",
            "uuid": "28783810-2e55-481f-9613-f513b32006db",
            "description": null
        },
        {
            "id": "manage_resources",
            "uuid": "fbdbe622-7ffe-4110-8e64-19161cc356ba",
            "description": "manage_resources"
        },
        {
            "id": "center_delete",
            "uuid": "da4f516e-73d9-48d8-9637-9af763555534",
            "description": null
        },
        {
            "id": "user_get_all",
            "uuid": "92da1385-4e8a-4d33-9a11-d3833310395c",
            "description": "user get all"
        },
        {
            "id": "role_delete",
            "uuid": "67504640-0e41-4470-a930-4c861f00effc",
            "description": null
        },
        {
            "id": "person_get_all",
            "uuid": "13da1cf3-9fe2-49d1-9b64-9bfd2527ce83",
            "description": null
        },
        {
            "id": "radiologist_template_get_all",
            "uuid": "b64559ce-4c41-4f55-bfef-777dfbf662ff",
            "description": null
        },
        {
            "id": "order_add",
            "uuid": "193a11c7-562a-4b1b-be98-799ceace0318",
            "description": null
        },
        {
            "id": "resource_get",
            "uuid": "94bd08da-1648-48f3-9b48-7f8ec077a734",
            "description": null
        },
        {
            "id": "stats_get",
            "uuid": "4bee860c-bd16-45be-9b4c-759a410bb227",
            "description": null
        },
        {
            "id": "report_delete",
            "uuid": "69b6df01-ca6b-4323-a4f1-418337d7b0cf",
            "description": null
        },
        {
            "id": "center_manage",
            "uuid": "cd1d32ca-31af-4172-b17c-5ec2b9c4dc4d",
            "description": null
        },
        {
            "id": "center_edit",
            "uuid": "6e03aa7d-22d8-49f8-9f26-bac0975d402d",
            "description": null
        }
    ]
    const expectedAction = {
      type: GET_LIST_AUTH,
      dataAuth
    }
    expect(actions.getListAuth(dataAuth)).toEqual(expectedAction)
  })
})