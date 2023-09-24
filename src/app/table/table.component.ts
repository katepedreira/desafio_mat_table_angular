import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


export interface MovieData {
  id: string;
  name: string;
  duration: string;
  director: string;
  posterUrl: string;
}

const movies: MovieData[] = [
  {
    id: '1',
    name: 'The Witch',
    duration: '120',
    director: 'Robert Eggers',
    posterUrl: 'https://media.fstatic.com/Yh3UyUZUFYKnfKr86mntj7XGpOQ=/210x312/smart/filters:format(webp)/media/movies/covers/2015/08/a-bruxa_t113126.jpeg',
  },
  {
    id: '2',
    name: 'Coherence',
    duration: '89',
    director: 'James Ward Byrkit',
    posterUrl: 'https://media.fstatic.com/brlBiiSMmJ4COQlFGkSTXfnjoms=/210x312/smart/filters:format(webp)/media/movies/covers/2014/08/coherence_t101327.jpg',
  },
  {
    id: '3',
    name: 'Pulp Fiction',
    duration: '154',
    director: 'Quentin Tarantino',
    posterUrl: 'https://media.fstatic.com/Kk4NgGRp7Edk0qhuzS1LzgVKQ9w=/210x312/smart/filters:format(webp)/media/movies/covers/2011/08/cc1cac6d34dcc8b321b0f352c550262c.jpg',
  },
  {
    id: '4',
    name: 'Kill Bill',
    duration: '111',
    director: 'Quentin Tarantino',
    posterUrl: 'https://media.fstatic.com/VRzkTVrrpF2vb8NIZyiO7Lu_fYE=/210x312/smart/filters:format(webp)/media/movies/covers/2011/06/987c943c87785cc89f19ae228b2874d2.jpg',
  },
  {
    id: '5',
    name: 'Mother!',
    duration: '121',
    director: 'Darren Aronofsky',
    posterUrl: 'https://media.fstatic.com/EfaH7ba7uq0S-6A8_9-8w1ehCbY=/210x312/smart/filters:format(webp)/media/movies/covers/2017/05/Mother-Poster.jpg',
  },
  {
    id: '6',
    name: 'Get Out',
    duration: '104',
    director: 'Jordan Peele',
    posterUrl: 'https://media.fstatic.com/Gye1zHgyPUpxTjo12y1vy6OVTjU=/210x312/smart/filters:format(webp)/media/movies/covers/2017/04/577190.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg',
  },
  {
    id: '7',
    name: 'Inception',
    duration: '148',
    director: 'Christopher Nolan',
    posterUrl: 'https://media.fstatic.com/s0pT0Z0ewb-QBAYaja9X1Jxqm_c=/210x312/smart/filters:format(webp)/media/movies/covers/2011/06/7c49092a6e7223cebd5bd8dfd579b6e6.jpg',
  },
  {
    id: '8',
    name: 'Shutter Island',
    duration: '138',
    director: 'Martin Scorsese',
    posterUrl: 'https://media.fstatic.com/1D0knjSURERAmY9kUk2U9S3-uHg=/210x312/smart/filters:format(webp)/media/movies/covers/2011/07/f8503d117d5560c07478c1fde344a4e8.jpg',
  },
  {
    id: '9',
    name: 'Fight Club',
    duration: '139',
    director: 'David Fincher',
    posterUrl: 'https://media.fstatic.com/n2kXPV_KNY09nr91AA2N2bCImag=/210x312/smart/filters:format(webp)/media/movies/covers/2017/03/Clube_da_Luta.jpg',
  },
  {
    id: '10',
    name: 'Prisoners',
    duration: '153',
    director: 'Denis Villeneuve',
    posterUrl: 'https://media.fstatic.com/DZ9darMutogVsKxpza2cjrwhafg=/210x312/smart/filters:format(webp)/media/movies/covers/2013/07/prisoners_t65997_2.jpg',
  },
  {
    id: '11',
    name: 'Incendies',
    duration: '130',
    director: 'Denis Villeneuve',
    posterUrl: 'https://media.fstatic.com/oN9-zK2BwM2IS_d1DFgISrm7H_o=/210x312/smart/filters:format(webp)/media/movies/covers/2011/12/964fb3d0da005b95f72f1904d656f9a8.jpg',
  },
  {
    id: '12',
    name: 'Black Swan',
    duration: '108',
    director: 'Darren Aronofsky',
    posterUrl: 'https://media.fstatic.com/tV_lzqQOo4p8Sh6Gy-Bebiaxw3E=/210x312/smart/filters:format(webp)/media/movies/covers/2011/06/25a5729c7740048485b2e8de17c3c9cd.jpg',
  },
  {
    id: '13',
    name: 'American Beauty',
    duration: '121',
    director: 'Sam Mendes',
    posterUrl: 'https://media.fstatic.com/zgFPirkMo1KLfoRTKcLxpuz4IoI=/210x312/smart/filters:format(webp)/media/movies/covers/2011/07/a7a2b44a16026c798c23af225a2b74d4.jpg',
  },
  {
    id: '14',
    name: 'Parasite',
    duration: '132',
    director: 'Bong Joon-ho',
    posterUrl: 'https://media.fstatic.com/vIUDRkoVCDrUEoxSlPqTTtD4sm8=/210x312/smart/filters:format(webp)/media/movies/covers/2019/04/x1ihw7kcn0r21.jpg',
  },
  {
    id: '15',
    name: 'Predestination',
    duration: '97',
    director: 'Michael Spierig, Peter Spierig',
    posterUrl: 'https://media.fstatic.com/Kv6PIuYB7d8-ymsRNdQw1ADamU4=/210x312/smart/filters:format(webp)/media/movies/covers/2014/09/predestination_t102250.jpg',
  },
  {
    id: '16',
    name: 'Matrix',
    duration: '136',
    director: 'Lana Wachowski, Lilly Wachowski',
    posterUrl: 'https://media.fstatic.com/qj-IOnnbfnOyMgoR-BIQFVD5JAw=/210x312/smart/filters:format(webp)/media/movies/covers/2011/06/bd3cef6e681142d110baaa646641b899.jpg',
  },
  {
    id: '17',
    name: 'Django Unchained',
    duration: '165',
    director: 'Quentin Tarantino',
    posterUrl: 'https://media.fstatic.com/gtXdbH6R1iCd3vAAVKU_wqZ0JDs=/210x312/smart/filters:format(webp)/media/movies/covers/2012/11/09b6557551f7ed83621825c9254a52cc.jpg',
  },
  {
    id: '18',
    name: 'Inglourious Basterds',
    duration: '153',
    director: 'Quentin Tarantino',
    posterUrl: 'https://media.fstatic.com/8cTdc9w3vqFt9PsOQvIBZYwCxKg=/210x312/smart/filters:format(webp)/media/movies/covers/2011/06/cb29085d53e4dda205e885bb7c2a05a5.jpg',
  },
  {
    id: '19',
    name: 'The Curious Case of Benjamin Button',
    duration: '166',
    director: 'David Fincher',
    posterUrl: 'https://media.fstatic.com/el4ZmPgH5nZbUjyDT1T_OhmiROk=/210x312/smart/filters:format(webp)/media/movies/covers/2009/03/o_curioso_caso_de_benjamin_button.jpg',
  },
  {
    id: '20',
    name: 'Good Will Hunting',
    duration: '126',
    director: 'Gus Van Sant',
    posterUrl: 'https://media.fstatic.com/TyW9sCslDGZo-_fEEYgF6bVMb3A=/210x312/smart/filters:format(webp)/media/movies/covers/2011/09/4d73290efd2a7dbc763b7a17e0c652c5.jpg',
  },
  {
    id: '21',
    name: 'Rocky',
    duration: '119',
    director: 'John G. Avildsen',
    posterUrl: 'https://media.fstatic.com/K5A3eyK_limT3-JPkrWpcf_7vwU=/210x312/smart/filters:format(webp)/media/movies/covers/2011/06/cf4e2b8e2a940ffafcb74b37e4f38b6f.jpg',
  },
  {
    id: '22',
    name: 'Psycho',
    duration: '109',
    director: 'Alfred Hitchcock',
    posterUrl: 'https://media.fstatic.com/TZ0J0UILeEAHvc7vQs9ScJmKAVA=/210x312/smart/filters:format(webp)/media/movies/covers/2010/08/428e08aedd545846abd1a20271a163e3.jpg',
  },
  {
    id: '23',
    name: 'Dogville',
    duration: '178',
    director: 'Lars Von Trier',
    posterUrl: 'https://media.fstatic.com/FrVaAbCw42xaNg4ZfKPnHzJ0ClU=/210x312/smart/filters:format(webp)/media/movies/covers/2011/06/9996608b908090ad5a754c86f3280da0.jpg',
  },
  {
    id: '24',
    name: 'Inside Out',
    duration: '94',
    director: 'Pete Docter',
    posterUrl: 'https://media.fstatic.com/7-nWQvULuoYlhtOdyfkhWF4gLvk=/210x312/smart/filters:format(webp)/media/movies/covers/2015/03/divertida-mente_t62633.jpg',
  },
  {
    id: '25',
    name: 'Vivarium',
    duration: '97',
    director: 'Lorcan Finnegan',
    posterUrl: 'https://media.fstatic.com/3wXNkWQqmiqdSAUiTBSgR9ZXoFs=/210x312/smart/filters:format(webp)/media/movies/covers/2020/01/Vivarium-poster-600x889.jpg',
  },
  {
    id: '26',
    name: '10 Cloverfield Lane',
    duration: '103',
    director: 'Dan Trachtenberg',
    posterUrl: 'https://media.fstatic.com/7QZq5z1nY6YyirU_2gn_39JynWU=/210x312/smart/filters:format(webp)/media/movies/covers/2016/02/rua-cloverfield-10_t24360.jpg',
  },
  {
    id: '27',
    name: 'Bacurau',
    duration: '131',
    director: 'Juliano Dornelles, Kleber Mendonça Filho',
    posterUrl: 'https://media.fstatic.com/IUh-o994qc_nVLCz-7WDtY6X5uI=/210x312/smart/filters:format(webp)/media/movies/covers/2019/07/0636548.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg',
  },
  {
    id: '28',
    name: 'Ex Machina',
    duration: '108',
    director: 'Alex Garland',
    posterUrl: 'https://media.fstatic.com/oz0NKsLmz2qXISOcyctevdFREwU=/210x312/smart/filters:format(webp)/media/movies/covers/2015/05/ex-machina_t85637.jpg',
  },
  {
    id: '29',
    name: 'The Social Network',
    duration: '120',
    director: 'David Fincher',
    posterUrl: 'https://media.fstatic.com/067XTYuLVsYh2j2qnqT7kFv1dbw=/210x312/smart/filters:format(webp)/media/movies/covers/2010/11/4c533be7c9038f537bbdc966df1f02f2.jpg',
  },
  {
    id: '30',
    name: 'Interestelar',
    duration: '168',
    director: 'Christopher Nolan',
    posterUrl: 'https://media.fstatic.com/CZJXsnso6YrTdjI8l4pc5tdkVNI=/210x312/smart/filters:format(webp)/media/movies/covers/2014/09/interestelar_t27814_1.jpg',
  },

];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'poster', 'name', 'duration', 'director'];
  dataSource: MatTableDataSource<MovieData>;
  pageSizeOptions: number[] = [5, 10, 20];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(movies);
  }

  ngOnInit() {
    this.updatePaginatorLength();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    const totalMovies = this.dataSource.data.length;
    this.pageSizeOptions = [5, 10, 20, totalMovies];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private updatePaginatorLength() {
    this.paginator.length = movies.length;
  }
}

