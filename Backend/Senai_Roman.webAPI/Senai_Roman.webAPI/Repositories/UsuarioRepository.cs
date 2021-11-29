using Senai_Roman.webAPI.Context;
using Senai_Roman.webAPI.Domains;
using Senai_Roman.webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Senai_Roman.webAPI.Repositories
{
    class UsuarioRepository : IUsuarioRepository
    {
        RomanContext ctx = new();

        public Usuario Login(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
