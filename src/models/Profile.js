export class Profile {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.picture = data.picture || 'No photo provided'
        this.class = data.class || 'Private'
        this.graduated = data.graduated
        this.bio = data.bio
        this.github = data.github
        this.linkedin = data.linkedin
        this.resume = data.resume
        this.coverImg = data.coverImg
    }
}

