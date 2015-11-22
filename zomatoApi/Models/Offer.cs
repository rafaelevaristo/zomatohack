using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace zomatoApi.Models
{
	public class Offer
	{
        public int id{ get; set; }
        public String Name { get; set; }
        public String Location { get; set; }
        public String Description { get; set; }
        public String EstimatedValue { get; set; }
        public Cook cook { get; set; }
    }
}