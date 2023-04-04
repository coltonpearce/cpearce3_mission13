﻿using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Controllers.Data
{
    public class Movie
    {
        [Key]
        public int MovieId { get; set; }
        public string? Category { get; set; }
        public string? Title { get; set; }   
        public string? Year { get; set; }
        public string? Director { get; set; }
        public int? Rating { get; set; }
        public string? Edited { get; set; }
        public string? LentTo { get; set; }
        public string? Notes { get; set; }   

    }
}
