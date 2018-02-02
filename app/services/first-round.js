import Service from '@ember/service';

export default Service.extend({
  matchups: null,

  init() {
    this._super(...arguments);
    this.matchups = [
      "ff39a4e3-2cc6-48f5-ac58-ff3b661328bb", // Villanova Wildcats
      "2ac08500-a010-4fcd-8dd4-d409a8783e52", // Mount St. Mary's Mountaineers

      "dd62793f-2ef2-468f-8288-3363f3b497e3", // Wisconsin Badgers
      "8b2a6fc4-7ada-4141-a49b-d00f767a6076", // Virginia Tech Hokies

      "ba7f81e4-b81a-431f-afaf-3f960d2dc4c2", // Virginia Cavaliers
      "579d19cc-446b-4e0c-8e47-a0add46e1a59", // North Carolina-Wilmington Seahawks

      "64cd5b91-a527-4af5-9f9c-1fa4958ea59a", // Florida Gators
      "12f0400f-c2ed-4fd7-bd9c-a21b7c85db16", // East Tennessee State Buccaneers

      "22502872-46fe-4358-97de-3e5071d4f24d", // Southern Methodist Mustangs
      "c52d8366-c94a-497c-9975-39c4a651fa72", // USC Trojans

      "087000c8-44ac-4177-9040-34de231ccc81", // Baylor Bears
      "fe8b3bd5-c5da-403a-9fe8-58a6e32a7b3f", // New Mexico State Aggies

      "0eca9615-1c19-489d-ae21-7a8288e9dee6", // South Carolina Gamecocks
      "c7451335-082b-41cd-b074-aab88b93baa7", // Marquette Golden Eagles

      "e7f3d873-683a-41de-bd31-cdd3a8d7a6eb", // Duke Blue Devils
      "e97a5008-6e84-45b0-9f3d-5595b8bf5196", // Troy Trojans

      "92eceb5b-61e4-4abb-81e2-b8cd727d3f65", // Gonzaga Bulldogs
      "864574ae-990b-4b59-8e30-243064daeb56", // South Dakota State Jackrabbits

      "07214056-ba88-450a-bf71-228112a2ee14", // Northwestern Wildcats
      "b00f3d13-096a-4668-a668-328bfc8884fb", // Vanderbilt Commodores

      "11e6ea12-deb8-40aa-9b42-f2ec45a33fbc", // Notre Dame Fighting Irish
      "313aad19-864f-499d-aa0e-cbca54141a21", // Princeton Tigers

      "8347b465-296e-4bad-a97a-f6c489f9a5c8", // West Virginia Mountaineers
      "34bc136b-c3a7-42cd-bc18-376c89cbb368", // Bucknell Bison

      "6433e300-0311-4d18-ac21-9da06c9de896", // Maryland Terrapins
      "ec4c5602-c04c-4aae-af22-b71d69b285ae", // Xavier Musketeers

      "d5fad8e8-d529-4092-aaf6-dd80aea9b6e6", // Florida State Seminoles
      "256fec21-0f69-4ba0-8c6d-6d70a8ce1229", // Florida Gulf Coast Eagles

      "28fb0367-7c88-4737-82cb-f5c2ad126b17", // Saint Mary's Gaels
      "dab50263-170c-428b-aab8-32729d58d927", // Virginia Commonwealth Rams

      "7a7bbcd4-1363-43ca-a503-b65863528a6a", // Arizona Wildcats
      "f97a4f08-64f4-47ea-8565-7087d442abdd", // North Dakota Fighting Hawks

      "d08152ed-57f4-405d-a848-b6ccbbd59602", // Kansas Jayhawks
      "c6361ba8-5b0d-4636-9cc9-efe4aa673f09", // UC Davis Aggies

      "50d5ddaf-91fa-472e-8ef0-52eeec08cfe4", // Miami (FL) Hurricanes
      "2aee418d-168d-4754-bae7-06f0f46391b1", // Michigan State Spartans

      "4a6d609b-9288-46dc-87b2-4033541db56a", // Iowa State Cyclones
      "d7040143-31b9-40f4-a331-8d8f2b125ff7", // Nevada Wolf Pack

      "2038d0d4-b5f3-4080-927c-4b059cd7f801", // Purdue Boilermakers
      "d0ecbed9-a7bd-4953-bbe8-9e18fdfc24b4", // Vermont Catamounts

      "e56f93ff-3f6d-4914-853d-c8d8b871fd4f", // Creighton Bluejays
      "918381d0-4820-4b27-bc4c-6c701cb19875", // Rhode Island Rams

      "07a7134c-64e8-4456-bb44-1bf12ddddc12", // Oregon Ducks
      "49b5f641-3d38-40a7-970f-59b91d02cca7", // Iona Gaels

      "cec76c74-652b-4833-b40a-acab06687205", // Michigan Wolverines
      "7918ea86-51df-49c0-a51f-74265059d7c8", // Oklahoma State Cowboys

      "f98bc42b-c76f-4b87-951d-3ff318095a4c", // Louisville Cardinals
      "459d12b3-8764-47db-9620-3de23c48910b", // Jacksonville State Gamecocks

      "8ab4c96f-ba7a-4e0d-a773-91dd64e36e25", // North Carolina Tar Heels
      "04144e1d-e0c0-466e-88a4-a34acb39c21b", // Texas Southern Tigers

      "90c43bd9-c7b0-46e3-b42b-c7d5f7f36a62", // Arkansas Razorbacks
      "86bd6eea-e554-4e17-a82e-2fe9d835c7db", // Seton Hall Pirates

      "31017841-4d59-4c3f-97d3-e1462c3d6583", // Minnesota Golden Gophers
      "10b0290f-a7cd-42aa-bc83-05c1fdd68dd1", // Middle Tennessee Blue Raiders

      "c2ed6884-5412-4a13-bf21-f89adff8e715", // Butler Bulldogs
      "6649ba1e-ab1c-49ca-8943-9a1ee3fd0b5b", // Winthrop Eagles

      "07441489-67ed-4693-a7e9-6220332412be", // Cincinnati Bearcats
      "253b5628-3efd-4d16-a31c-af8c4efe3662", // Kansas State Wildcats

      "e7384e50-1add-4337-8094-063a6ba07e4a", // UCLA Bruins
      "859c2684-5c7f-416c-a965-84b4a30cb65a", // Kent State Golden Flashes

      "4b467a31-313b-4d8b-9b63-14cb2503c909", // Dayton Flyers
      "d2643a63-08b4-4d33-a064-a7ee1c3785b6", // Wichita State Shockers

      "6e0969f7-ff48-4cba-94be-666fe125f150", // Kentucky Wildcats
      "17c7b6e6-8141-489d-bf35-a1a8b49d5eb6"  // Northern Kentucky University Norse
    ]
  }
});
