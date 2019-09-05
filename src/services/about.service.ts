export class AboutService {
    
    private description = "An example of web application for a photo gallery";
    
    //init example reviews
    private reviews = [{ date: new Date(), message: "Review 1" },
    { date: new Date(), message: "Review 2" },
    { date: new Date(), message: "Review 3" }];

    private basicInfo = {
      fullName: "guest",
      mail: "guest@example.com"
    }

    getDescription() {
      return this.description;
    }

    getBasicInfo() {
      return this.basicInfo;
    }
    
    addReview(data) {
        data.date = new Date();
        this.reviews.push(data);
    }

    getAllReviews() {
        return this.reviews;
    }
}