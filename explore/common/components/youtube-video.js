Vue.component('youtube-video', {
    template: `
    <div class="youtube-video" :style="{ 'display': display }">
        <div class="slant-range" :class="{ 'is-invisible': !getSlantScore() }">
            <div class="slant-range-slider" :style="{ 'left': sliderLeft }">
                <i class="fas fa-arrow-down is-size-4"></i>
                <span class="ml-1">{{ slantScore }}</span>
            </div>
        </div>
        <div class="iframe-container">
            <iframe :src="embedUrl"
                title="YouTube video player" 
                frameborder="0" 
                allowfullscreen v-if="!hideEmbed"></iframe>
            <img v-if="hideEmbed" :src="thumbnail" class="yt-thumbnail">
        </div>
        <div class="yt-metadata mt-2">
            <a target="_blank" :href="url" class="yt-title" :title="title">
                {{ title }}
            </a>
            <div class="tooltip">
                <span>{{ channelName }}</span>
            </div>
            <div class="tooltip">
                <span>{{ views }}{{ likes }}{{ publishDate }}</span>
            </div>
        </div>
    </div>
    `,
    props: ['videoId',  'hideUnks', 'metadata', 'slant', 'hideEmbed'],
    methods: {
        
        toFixed: function(x) {
            if (x) return x.toFixed(2);
        },

        toNumeral: function(x) {
            return numeral(x).format('0a').toUpperCase();
        },

        getSlantScore: function() {
            const slantData = this.slant;
            let score = null;
            if (slantData && slantData.slant && 
                (slantData.conservative_landmark_follows + slantData.liberal_landmark_follows > 12)) {
                score = parseFloat(slantData.slant);
            }
            return score;
        }
    },
    computed: {
        thumbnail: function() {
            const video = this.metadata;
            if (video) {
                if (video.thumbnail) {
                    return video.thumbnail;
                } else if (video.thumbnails) {
                    return video.thumbnails.split(',')[0];
                }
            }
        },
        url: function() {
            return 'https://youtube.com/watch?v=' + this.videoId;
        },
        title: function() {
            const video = this.metadata;
            if (video && video.title) return video.title;
        },
        channelName: function() {
            const video = this.metadata;
            if (video && video.uploader) return video.uploader;
        },
        views: function() {
            const video = this.metadata;
            if (video && video.view_count)
                return this.toNumeral(video.view_count) + ' views';
        },
        likes: function() {
            const video = this.metadata;
            if (video && video.like_count)
                return  ' • ' + this.toNumeral(video.like_count) + ' likes';
        },
        publishDate: function() {
            const video = this.metadata;
            if (video && video.upload_date)
                return ' • ' + dayjs(video.upload_date).fromNow();
        },
        display: function() {
            if (!this.hideUnks) {
                return 'inline-block';
            }
            const slantData = this.slant;
            if (slantData && slantData.slant && 
                (slantData.conservative_landmark_follows + slantData.liberal_landmark_follows > 12)) {
                return 'inline-block';
            }
            return 'none';
        },
        embedUrl: function() {
            return 'https://www.youtube.com/embed/' + this.videoId;
        },
        sliderLeft: function() {
            let score = this.getSlantScore();
            if (score != null) {
                // return 0;
                return `${(score + 1) * 50}%`;
            }
        },
        slantScore: function() {
            return this.toFixed(this.getSlantScore());
        }
    }
})