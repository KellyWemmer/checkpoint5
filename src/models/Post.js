export class Post {
    constructor (data) {
        this.id = data.id || ''
        this.likeIds = data.likeIds 
        this.imgUrl = data.imgUrl || ''
        this.body = data.body || ''
        this.creatorId = data.creatorId || ''
        this.createdAt = data.createdAt || ''
        this.updatedAt = data.updatedAt || ''
        this.creator = data.creator || {}        
    }
}