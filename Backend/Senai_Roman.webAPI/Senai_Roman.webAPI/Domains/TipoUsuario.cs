﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Senai_Roman.webAPI.Domains
{
    public partial class TipoUsuario
    {
        public TipoUsuario()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public short IdTipoUsuario { get; set; }
        public string Titulo { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
