﻿using Senai_Roman.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Senai_Roman.webAPI.Interfaces
{
    interface ITemaRepository
    {
        public List<Tema> ListarTemas();
    }
}
