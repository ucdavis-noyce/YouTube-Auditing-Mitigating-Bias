const app = new Vue({

    el: '#app',

    data: {
        selectedDate: null,
        dates: null,
        topVideos: null,
        commonVideos: null,
        removeCommon: true,
        removeNoSlant: false
    },

    methods: {

        setDate: async function(date) {
            this.selectedDate = date;
        },

        loadDate: async function(date) {
            const formatted = dayjs(date).utc().format('YYYY-MM-DD');
            this.topVideos = await getTopVideos(formatted);
        },

        download: async function () {
            var blob = new Blob([JSON.stringify(this.topVideos)], {type: "application/json;charset=utf-8"});
            const formatted = dayjs(this.selectedDate).utc().format('YYYY-MM-DD');
            saveAs(blob, `top-recommendations-${formatted}.json`);
        },

        getVideoList: function(key) {
            if (!this.topVideos[key]) {
                return [];
            }

            if (!this.removeCommon) {
                return this.topVideos[key];
            }
            
            return this.topVideos[key].filter(x => !this.topVideos.common_videos.includes(x));
        }

    },

    created: async function() {
        this.dates = await getSockPuppetDates();
        this.setDate(this.dates.slice(-2)[0]);
        await this.loadDate(this.selectedDate);
    },

    computed: {
    
        disabledDates: function() {
            const self = this;
            return {
                customPredictor: function(date) {
                    const formatted = dayjs(date).utc().format('YYYY-MM-DD');
                    return !self.dates.includes(formatted);
                }
            }
        },

        leftVideos: function() {
            return this.getVideoList('Far Left');
        },

        centerLeftVideos: function() {
            return this.getVideoList('Left');
        },

        centerVideos: function() {
            return this.getVideoList('Moderate');
        },

        centerRightVideos: function() {
            return this.getVideoList('Right');
        },

        rightVideos: function() {
            return this.getVideoList('Far Right');
        }
    
    },

    components: {
        vuejsDatepicker
    }

});
