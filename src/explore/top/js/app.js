const app = new Vue({

    el: '#app',

    data: {
        selectedDate: null,
        dates: null,
        topVideos: null,
        commonVideos: null,
        removeCommon: true,
        removeNoSlant: true
    },

    methods: {

        setDate: async function(date) {
            this.selectedDate = date;
        },

        loadDate: async function(date) {
            this.selectedDate = dayjs(date).format('YYYY-MM-DD');
            this.topVideos = await getTopVideos(this.selectedDate);
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
        await this.loadDate(this.dates[this.dates.length - 1]);
    },

    computed: {
    
        disabledDates: function() {
            const self = this;
            return {
                customPredictor: function(date) {
                    const formatted = dayjs(date).format('YYYY-MM-DD');
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