export class Post {
    constructor (data) {
        this.id = data.id || ''
        this.likeIds = data.likeIds 
        this.imgUrl = data.imgUrl || 'https://thiscatdoesnotexist.com'
        this.body = data.body || 'No data provided'
        this.creatorId = data.creatorId || ''
        this.createdAt = data.createdAt || ''
        this.updatedAt = data.updatedAt || ''
        this.creator = data.creator || {}        
    }
}