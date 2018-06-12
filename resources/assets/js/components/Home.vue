<template>
    <div class="container mt">
        <div class="row">
            <div class="col-md-4">

                <div class="panel panel-default">
                    <div class="panel-heading"> {{ $t('translation.addNewUserTitle') }} </div>

                    <div class="panel-body">
                        <div class="form-group">
                            <label for="surname"> {{ $t('translation.surname') }} </label>
                            <input type="text" class="form-control" id="surname"
                                   v-model="surname">
                        </div>
                        <div class="form-group">
                            <label for="name"> {{ $t('translation.name') }} </label>
                            <input type="text" class="form-control" id="name"
                                   v-model="name">
                        </div>
                        <div class="form-group">
                            <label for="middle_name"> {{ $t('translation.middleName') }} </label>
                            <input type="text" class="form-control" id="middle_name"
                                   v-model="middleName">
                        </div>
                        <div class="form-group">
                            <label for="birthday"> {{ $t('translation.birthday') }} </label>
                            <input type="text" class="form-control" id="birthday"
                                   v-model="birthday">
                        </div>
                        <div class="form-group">
                            <label for="position"> {{ $t('translation.position') }} </label>
                            <input type="text" class="form-control" id="position"
                                   v-model="position">
                        </div>
                        <div class="form-group">
                            <label for="salary"> {{ $t('translation.salary') }}</label>
                            <input type="text" class="form-control" id="salary"
                                   v-model="salary">
                        </div>

                        <template v-if="!isEdit">
                            <button type="button" class="btn btn-sm btn-primary pull-right"
                                    @click="addNewUser">
                                {{ $t('translation.addNewUser') }}
                            </button>
                        </template>
                        <template v-else>
                            <button type="button" class="btn btn-sm btn-success pull-right"
                                    @click="saveEditUser">
                                {{ $t('translation.save') }}
                            </button>
                            <button type="button" class="btn btn-sm btn-primary pull-left"
                                    @click="cancelEdit">
                                {{ $t('translation.cancel') }}
                            </button>
                        </template>
                    </div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-heading"> {{ $t('translation.workWithFile') }} </div>
                    <div class="panel-body">
                        <div class="col-12 form-group">
                            <input type="file" name="file"
                                   accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                   @change="filesChange($event.target.files)">
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-sm btn-primary pull-right"
                                    @click="importFile">
                                {{ $t('translation.import') }}
                            </button>
                            <a class="btn btn-sm btn-primary pull-left" href="/file">
                                {{ $t('translation.export') }}
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-md-8">
                <vuetable ref="userList"
                          api-url="/api/user"
                          :fields="fields"
                          pagination-path=""
                          data-path="data"
                          detail-row-component="my-detail-row"
                >
                    <template slot="actions" slot-scope="props">
                        <button type="button" class="btn btn-md" :title="$t('translation.edit')"
                            @click="getUser(props.rowData.id)">
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                        <button type="button" class="btn btn-md" :title="$t('translation.remove')"
                            @click="removeUser(props.rowData.id)">
                            <i class="fa fa-trash-o"></i>
                        </button>
                    </template>
                </vuetable>
            </div>
        </div>

    </div>
</template>

<script>
    import * as types from '../store/mutation-type';
    import Vuetable from 'vuetable-2/src/components/Vuetable.vue';
    import MixinFieldsUsers from '../mixins/fields/users';

    const objectToFormData = require('object-to-formdata');

    export default {
        mixins: [
            MixinFieldsUsers,
        ],
        components: {
            Vuetable,
        },
        data() {
            return {
                isEdit: false,
                userId: null,
            };
        },
        computed: {
            surname: {
                get() {
                    return this.$store.getters.surname;
                },
                set(value) {
                    this.$store.commit(types.SURNAME, value);
                },
            },
            name: {
                get() {
                    return this.$store.getters.name;
                },
                set(value) {
                    this.$store.commit(types.NAME, value);
                },
            },
            middleName: {
                get() {
                    return this.$store.getters.middleName;
                },
                set(value) {
                    this.$store.commit(types.MIDDLE_NAME, value);
                },
            },
            birthday: {
                get() {
                    return this.$store.getters.birthday;
                },
                set(value) {
                    this.$store.commit(types.BIRTHDAY, value);
                },
            },
            position: {
                get() {
                    return this.$store.getters.position;
                },
                set(value) {
                    this.$store.commit(types.POSITION, value);
                },
            },
            salary: {
                get() {
                    return this.$store.getters.salary;
                },
                set(value) {
                    this.$store.commit(types.SALARY, value);
                },
            },
            pathFile() {
                return this.$store.getters.file;
            },
        },
        mounted() {
            // this.$store.dispatch('exportFile', {
            //     data: objectToFormData({
            //         file: this.file,
            //     }),
            // });
        },
        methods: {
            userListTableRefresh() {
                this.$refs.userList.refresh();
            },
            cancelEdit() {
                this.switchIsEdit();
                this.clearFormUser();
            },
            switchIsEdit() {
                this.isEdit = !this.isEdit;
            },
            clearFormUser() {
                this.surname = '';
                this.name = '';
                this.middleName = '';
                this.birthday = '';
                this.position = '';
                this.salary = '';
                this.userId = null;
            },
            async addNewUser() {
                try {
                    await this.$store.dispatch('addNewUser', {
                        data: {
                            surname: this.surname,
                            name: this.name,
                            middle_name: this.middleName,
                            birthday: this.birthday,
                            position: this.position,
                            salary: this.salary,
                        }
                    });
                    this.$toasted.success(this.$t('translation.userAdded')).goAway(1500);
                    this.userListTableRefresh();
                    this.clearFormUser();
                } catch (e) {
                    this.$toasted.error(this.$t('translation.error')).goAway(1500);
                }
            },
            async getUser(id) {
                try {
                    await this.$store.dispatch('getUser', id);
                    this.switchIsEdit();
                    this.userId = id;
                } catch (e) {
                    this.$toasted.error(this.$t('translation.error')).goAway(1500);
                }
            },
            async saveEditUser() {
                try {
                    await this.$store.dispatch('saveEditUser', {
                        id: this.userId,
                        data: {
                            surname: this.surname,
                            name: this.name,
                            middle_name: this.middleName,
                            birthday: this.birthday,
                            position: this.position,
                            salary: this.salary,
                        },
                    });
                    this.$toasted.success(this.$t('translation.userEdited')).goAway(1500);
                    this.userListTableRefresh();
                    this.cancelEdit();
                } catch (e) {
                    this.$toasted.error(this.$t('translation.error')).goAway(1500);
                }
            },
            async removeUser(id) {
                const result = await this.$swal({
                    title: this.$t('translation.areYouSure'),
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: this.$t('translation.yes'),
                    cancelButtonColor: '#d33d33',
                    cancelButtonText: this.$t('translation.no'),
                });
                if (result.value) {
                    try {
                        await this.$store.dispatch('removeUser', id);
                        this.userListTableRefresh();
                        this.$toasted.success(this.$t('translation.userRemove')).goAway(1500);
                    } catch (e) {
                        this.$toasted.error(this.$t('translation.error')).goAway(1500);
                    }
                }
                this.cancelEdit();
            },
            filesChange(file) {
                this.file = file[0];
            },
            async importFile() {
                try {
                    await this.$store.dispatch('importFile', {
                        data: objectToFormData({
                            file: this.file,
                        }),
                    });
                    this.$toasted.success(this.$t('translation.userEdited')).goAway(1500);
                    this.userListTableRefresh();
                } catch (e) {
                    this.$toasted.error(this.$t('translation.error')).goAway(1500);
                }
            },
            // async exportFile() {
            //     try {
            //         await this.$store.dispatch('exportFile');
            //     } catch (e) {
            //         this.$toasted.error(this.$t('translation.error')).goAway(1500);
            //     }
            // },
        },
    };
</script>
