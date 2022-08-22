export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture || 'https://thiscatdoesnotexist.com'
    this.class = data.class || 'Private'
    this.graduated = data.graduated
    this.bio = data.bio || 'No bio provided'
    this.github = data.github 
    this.linkedin = data.linkedin
    this.resume = data.resume
    this.coverImg = data.coverImg
   
  }
}
