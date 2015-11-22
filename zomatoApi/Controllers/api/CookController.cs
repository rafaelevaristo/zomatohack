using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace zomatoApi.Controllers.api
{

    //[EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class CookController : ApiController
    {
        // GET: api/Cook
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Cook/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Cook
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Cook/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Cook/5
        public void Delete(int id)
        {
        }
    }
}
