using Microsoft.EntityFrameworkCore;
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
    class TemaRepository : ITemaRepository
    {
        RomanContext ctx = new();

        public List<Tema> ListarTemas()
        {
            return ctx.Temas.ToList();
        }
    }
}
