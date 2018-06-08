<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">

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

            </div>
        </div>

        <div class="row">
            <div class="col-md-8 col-md-offset-2">
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
                        <button type="button" class="btn btn-md"
                                :title="$t('translation.remove')">
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
        },
        methods: {
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
                    this.$refs.userList.refresh();
                } catch (e) {
                    console.log(e);
                }
            },
            async getUser(id) {
                try {
                    await this.$store.dispatch('getUser', id);
                    this.switchIsEdit();
                    this.userId = id;
                } catch (e) {
                    console.log(e);
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
                    this.$refs.userList.refresh();
                } catch (e) {
                    console.log(e);
                }
            },
        },
    };
</script>
