const mimeType = 'video/webm; codecs="vorbis,vp8"'

export default class VideoChunkPlayer
{
    constructor(container)
    {
        this.isPlaying = false
        
        this.videoElement = document.createElement("video")
        container.appendChild(this.videoElement)
        
        this.videoElement.id= "merda"
        this.videoElement.autoplay = true
        
        this.mediaSource = new MediaSource();
        this.videoElement.src = URL.createObjectURL(this.mediaSource);
        
        this.queue = []

        this.mediaSource.addEventListener("sourceopen", (e) =>
        {
            console.log("sourceopen", e)
            this.sourceBuffer = this.mediaSource.addSourceBuffer(mimeType);
            this.sourceBuffer.addEventListener('updateend', () =>
            {
                console.log("updateend", this.queue)
                this.playFromQueue()
            });
        })
    }
    
    playFromQueue()
    {
        console.log("playing from queue", this.queue.length)
        if (!this.queue.length)
        {
            this.isPlaying = false
            return
        }
        console.log("hooray")
        this.isPlaying = true
        this.sourceBuffer.appendBuffer(this.queue.shift())
        this.videoElement.currentTime = 0;
        this.videoElement.play().catch(console.error)
    }

    playChunk(arrayBuffer)
    {
        console.log("playing chunk", this.mediaSource.readyState, this.sourceBuffer.updating, this.queue)
        if (this.mediaSource.readyState != "open")
            return
        this.queue.push(arrayBuffer)
        if (!this.isPlaying) this.playFromQueue()
    }
}
