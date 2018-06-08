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

                        <button type="button" class="btn btn-sm btn-primary pull-right"
                                @click="addNewUser">
                            {{ $t('translation.addNewUser') }}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                surname: 'test',
                name: 'test',
                middleName: 'test',
                birthday: 'test',
                position: 'test',
                salary: 'test',
            };
        },
        methods: {
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
                } catch (e) {
                    console.log(e);
                }
            },
        },
    };
</script>
