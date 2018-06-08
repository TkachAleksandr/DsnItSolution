export default {
    data() {
        return {
            fields: [
                {
                    name: 'surname',
                    sortField: 'surname',
                    title: this.$t('translation.surname'),
                    titleClass: 'text-left',
                    dataClass: 'text-left',
                },
                {
                    name: 'name',
                    sortField: 'name',
                    title: this.$t('translation.name'),
                    titleClass: 'text-left',
                    dataClass: 'text-left',
                },
                {
                    name: 'middle_name',
                    sortField: 'middle_name',
                    title: this.$t('translation.middleName'),
                    titleClass: 'text-left',
                    dataClass: 'text-left',
                },
                {
                    name: 'birthday',
                    sortField: 'birthday',
                    title: this.$t('translation.birthday'),
                    titleClass: 'text-center',
                    dataClass: 'text-center',
                },
                {
                    name: 'salary',
                    sortField: 'salary',
                    title: this.$t('translation.salary'),
                    titleClass: 'text-center',
                    dataClass: 'text-center',
                },
                {
                    name: '__slot:actions',
                    title: this.$t('translation.actions'),
                    titleClass: 'text-center',
                    dataClass: 'text-center',
                },
            ],
        };
    },
};
