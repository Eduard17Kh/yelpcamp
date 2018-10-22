var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment")

var data = [
    {
        name: "Shulgantash", 
        image: "https://images.freeimages.com/images/large-previews/e4c/camping-tent-1058140.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet hendrerit tortor. Nunc sit amet dolor a neque sagittis blandit vitae ut magna. Nam feugiat pellentesque condimentum. Duis id mi dapibus arcu pharetra feugiat vitae bibendum magna. Donec vel rhoncus urna. In ornare massa eget eros ullamcorper, ut ornare felis dignissim. Suspendisse lacinia felis eget elit luctus egestas ut nec turpis. Cras eleifend odio nisi, ut accumsan ante consequat venenatis. Pellentesque vel libero in neque porttitor ullamcorper. Pellentesque sed viverra diam, in accumsan est."
    },
    {
        name: "Ilmurzino", 
        image: "https://farm8.staticflickr.com/7293/9705520990_c914a4c524.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet hendrerit tortor. Nunc sit amet dolor a neque sagittis blandit vitae ut magna. Nam feugiat pellentesque condimentum. Duis id mi dapibus arcu pharetra feugiat vitae bibendum magna. Donec vel rhoncus urna. In ornare massa eget eros ullamcorper, ut ornare felis dignissim. Suspendisse lacinia felis eget elit luctus egestas ut nec turpis. Cras eleifend odio nisi, ut accumsan ante consequat venenatis. Pellentesque vel libero in neque porttitor ullamcorper. Pellentesque sed viverra diam, in accumsan est."
    },
    {
        name: "Inzer", 
        image: "https://farm5.staticflickr.com/4049/4657993523_fc9f5346f1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet hendrerit tortor. Nunc sit amet dolor a neque sagittis blandit vitae ut magna. Nam feugiat pellentesque condimentum. Duis id mi dapibus arcu pharetra feugiat vitae bibendum magna. Donec vel rhoncus urna. In ornare massa eget eros ullamcorper, ut ornare felis dignissim. Suspendisse lacinia felis eget elit luctus egestas ut nec turpis. Cras eleifend odio nisi, ut accumsan ante consequat venenatis. Pellentesque vel libero in neque porttitor ullamcorper. Pellentesque sed viverra diam, in accumsan est."
    }
];

function seedDB(){
    // remove campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("You removed campgrounds!");
     // add a new campground
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                    // create a campground
                    Comment.create(
                        {
                            text:"This is a greate, but not have internet",
                            author:"Homer"
                            
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("create a new comment");
                            }
                    });
                }
            });
        });
    });
}

module.exports = seedDB;