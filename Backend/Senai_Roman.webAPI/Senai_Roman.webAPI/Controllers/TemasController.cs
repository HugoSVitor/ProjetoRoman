using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Senai_Roman.webAPI.Interfaces;
using Senai_Roman.webAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Roman.webAPI.Controllers
{
    [Produces("application/json")]

    [Route("api/[controller]")]

    [ApiController]
    [Authorize]
    public class TemasController : ControllerBase
    {
        private ITemaRepository _temaRepository { get; set; }

        public TemasController()
        {
            _temaRepository = new TemaRepository();
        }

        [Authorize(Roles = "2")]
        [HttpGet]
        public IActionResult ListarTemas() 
        {
            return Ok(_temaRepository.ListarTemas());
        }
    }
}
