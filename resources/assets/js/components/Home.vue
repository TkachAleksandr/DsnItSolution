<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">

                <div class="panel panel-default">
                    <div class="panel-heading"> Пользователи </div>

                    <div class="panel-body">
                        <div class="form-group">
                            <label for="surname"> Фамилия </label>
                            <input type="text" class="form-control" id="surname"
                                   v-model="surname">
                        </div>
                        <div class="form-group">
                            <label for="name"> Имя </label>
                            <input type="text" class="form-control" id="name"
                                   v-model="name">
                        </div>
                        <div class="form-group">
                            <label for="middle_name"> Отчество </label>
                            <input type="text" class="form-control" id="middle_name"
                                   v-model="middle_name">
                        </div>
                        <div class="form-group">
                            <label for="birthday"> Год рождения </label>
                            <input type="text" class="form-control" id="birthday"
                                   v-model="birthday">
                        </div>
                        <div class="form-group">
                            <label for="position"> Должность </label>
                            <input type="text" class="form-control" id="position"
                                   v-model="position">
                        </div>
                        <div class="form-group">
                            <label for="salary"> Зарплата </label>
                            <input type="text" class="form-control" id="salary"
                                   v-model="salary">
                        </div>

                        <button type="button" class="btn btn-sm btn-primary pull-right"> Добавить </button>
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
                surname: '',
                name: '',
                middle_name: '',
                birthday: '',
                position: '',
                salary: '',
            };
        },
    };
</script>
