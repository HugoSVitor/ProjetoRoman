using System;
using System.Collections.Generic;

#nullable disable

namespace Senai_Roman.webAPI.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Sugestaos = new HashSet<Sugestao>();
        }

        public short IdUsuario { get; set; }
        public short? IdTipoUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }

        public virtual TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public virtual ICollection<Sugestao> Sugestaos { get; set; }
    }
}
