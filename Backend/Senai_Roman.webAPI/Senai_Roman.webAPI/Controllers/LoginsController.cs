using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Senai_Roman.webAPI.Domains;
using Senai_Roman.webAPI.Interfaces;
using Senai_Roman.webAPI.Repositories;
using Senai_Roman.webAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Senai_Roman.webAPI.Controllers
{
    [Produces("application/json")]

    [Route("api/[controller]")]

    [ApiController]
    public class LoginsController : ControllerBase
    {
        private IUsuarioRepository _usuarioRepository { get; set; }

        public LoginsController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel login)
        {
            try
            {
                Usuario usuarioBuscado = _usuarioRepository.Login(login.Email, login.Senha);

                if (usuarioBuscado == null)
                {
                    return NotFound("Email ou Senha inválidos!");
                }

                var minhasClaims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),
                    new Claim(ClaimTypes.Role, usuarioBuscado.IdTipoUsuario.ToString()),
                    new Claim( "role", usuarioBuscado.IdTipoUsuario.ToString() )
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("roman-chave-autenticacao"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var meuToken = new JwtSecurityToken
                    (
                        issuer: "Senai_Roman.webAPI",
                        audience: "Senai_Roman.webAPI",
                        claims: minhasClaims,
                        expires: DateTime.Now.AddMinutes(15),
                        signingCredentials: creds
                    );

                return Ok
                    (
                        new { Token = new JwtSecurityTokenHandler().WriteToken(meuToken) }
                    );

            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
