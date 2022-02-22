import Vue from 'vue'
import dayjs from 'dayjs'
require('dayjs/locale/fr')

dayjs.locale('fr')

Vue.filter('format', function (date, format) {
    return dayjs(date).locale('fr').format(format)
})

