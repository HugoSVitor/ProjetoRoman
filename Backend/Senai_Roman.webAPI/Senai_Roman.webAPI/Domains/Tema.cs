using System;
using System.Collections.Generic;

#nullable disable

namespace Senai_Roman.webAPI.Domains
{
    public partial class Tema
    {
        public Tema()
        {
            Sugestaos = new HashSet<Sugestao>();
        }

        public short IdTema { get; set; }
        public string TituloTema { get; set; }
        public short? Situacao { get; set; }

        public virtual ICollection<Sugestao> Sugestaos { get; set; }
    }
}
