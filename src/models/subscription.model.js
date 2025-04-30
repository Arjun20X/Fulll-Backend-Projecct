import mongoose, {Schema} from "mongoose";


// hm chahte to user model me hi subscriber naam ka ek array bna skte the aur usme saare subcriber ki id store kr skte the 
// pr logo ki millions of subscribers bhi hote hai millions of array bnte usme millions of subscribers hote to usme insertion,
// deletion vgera ke operations bht heavy ho jate isliye hmne ye alg se subscribtion model bnaya hai

const subscriptionSchema = new Schema(
  {
    // subsriber me hai hare users jinhone se subcribe kiya h , lekin isse hm ye nhi pta kr skte ki konse channel ko subscribe kiya
    // jaise ajun ne ek channel subscribe kiya , tarun ne ek channel subscribe kiya , sujesh ne ek channel subscribe kiya 
    // to is object me store hoga arjun , tarun , sujesh
    subscriber: {
      type: Schema.Types.ObjectId, // one who is subscribing
      ref: "User",
    },
    // channel me hai channel or users jinko subscribe kiya gy hai, kisse kiya gya h ptani pr kiya gya hai
    // jaise ek channel hai chaiAurCode to usko kisi ne subscribe kiya, fir kisi aur ne bhi usko subcribe kr diya , fir kisi ne freecodecamp ko subscribe kr diya
    channel: {
      type: Schema.Types.ObjectId, // one to whom subscriber is subscribing
      ref: "User",
    },

  },
  { timestamps: true }
);


// ab agr mjhe dhudna hai ki chaiaurcode ko kisne subscribe kiya aur mai ssochu ki subcriber wale object se mil jyga to ye glt hai
// kyuki usme to bss vo users stroe hai jinhone kisi channel ko subscribe kiya hai usme se hm ye kaise pta krenge ki arjun ne kisko subscribe kiya,
// tarun ne kisko kiya aur sujesh ne kisko kiya
// hme jb dekhna hai ki kisi channel ke kitne subscriber hai to hm channel wale object me dekhenge ki vo usme vo channel kitni baar aya hai utne
//  hi baar vo subscribe hua hai bss use count kr lenge

// jb hme pta krna hai ki mai agr apna profile dekh rha hu to maine kis kis ko subcribe kr rkha hai to mai subscriber wale object me dekhunhga ki 
// mera naam kitni baar hai use count kr lunga to pta chl jyga ki maine kitne channel subscribe kiye hai



export const Subscription = mongoose.model("Subscription", subscriptionSchema);
