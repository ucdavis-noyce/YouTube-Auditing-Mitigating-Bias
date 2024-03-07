const app = new Vue({

    el: '#app',

    data: {
        selectedDate: null,
        dates: null,
        topVideos: null,
        commonVideos: null,
        removeCommon: true,
        removeNoSlant: false,
        loadCount: 2
    },

    methods: {

        setDate: async function(date) {
            this.selectedDate = date;
        },

        loadDate: async function(date) {
            const formatted = dayjs(date).utc().format('YYYY-MM-DD');
            this.loadCount = 3;
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

            let videos = this.topVideos[key];

            if (this.removeCommon) {
                videos = videos.filter(x => !this.topVideos.common_videos.includes(x));
            }

            if (this.removeNoSlant) {
                videos = videos.filter(x => this.topVideos.slants[x] && this.topVideos.slants[x].slant);
            }

            return videos;
        },

        loadMore: function() {
            this.loadCount += 2;
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
            return this.getVideoList('Far Left').slice(0, this.loadCount);
        },

        centerLeftVideos: function() {
            return this.getVideoList('Left').slice(0, this.loadCount);
        },

        centerVideos: function() {
            return this.getVideoList('Moderate').slice(0, this.loadCount);
        },

        centerRightVideos: function() {
            return this.getVideoList('Right').slice(0, this.loadCount);
        },

        rightVideos: function() {
            return this.getVideoList('Far Right').slice(0, this.loadCount);
        },

        loadedAll: function() {
            return (this.loadCount >= 10);
        }
    
    },

    components: {
        vuejsDatepicker
    }

});
