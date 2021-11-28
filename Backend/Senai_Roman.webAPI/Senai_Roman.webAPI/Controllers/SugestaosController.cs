using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Senai_Roman.webAPI.Domains;
using Senai_Roman.webAPI.Interfaces;
using Senai_Roman.webAPI.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Roman.webAPI.Controllers
{
    [Produces("application/json")]

    [Route("api/[controller]")]

    [ApiController]
    [Authorize]
    public class SugestaosController : ControllerBase
    {
        private ISugestaoRepository _sugestaoRepository { get; set; }

        public SugestaosController()
        {
            _sugestaoRepository = new SugestaoRepository();
        }

        [Authorize(Roles = "2")]
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_sugestaoRepository.ListarSugestoes());
        }

        [Authorize(Roles = "2")]
        [HttpPost]
        public IActionResult Cadastrar(Sugestao novaSugestao)
        {
            _sugestaoRepository.CadastrarSugestao(novaSugestao, Convert.ToInt32(HttpContext.User.Claims.FirstOrDefault(C => C.Type == JwtRegisteredClaimNames.Jti).Value));
            return StatusCode(201);
        }
    }
}
