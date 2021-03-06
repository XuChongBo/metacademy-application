
/*global define*/
define(["backbone", "agfk/models/concept-resource-model"], function(Backbone, ConceptResource){
var ResourceCollection =  Backbone.Collection.extend({
    model: ConceptResource,
    comparator: "ordering",
    /**
     * Returns a backbone collection of the free resources TODO does this maintain the cid correctly?
     */
    getFreeResources: function(){
      return new ResourceCollection(this.filter(function (mdl) {
        return mdl.get("global_resource").get("access") === "free";
      }));
    },

    getFreeSignupResources: function(){
      return new ResourceCollection(this.filter(function(mdl){return mdl.get("global_resource").get("access") === "reg"; }));
    },

    /**
     * Returns a backbone collection of the paid resources TODO does this maintain the cid correctly?
     */
    getPaidResources: function(){
      return new ResourceCollection(this.filter(function(mdl){return mdl.get("global_resource").get("access") === "paid"; }));
    },

    getCore: function(){
      return new ResourceCollection(this.where({core: true}));
    },

    getSupplemental: function(){
      return new ResourceCollection(this.where({core: false}));
    }
  });

  return ResourceCollection;
});
