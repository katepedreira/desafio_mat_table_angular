import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface UserData {
  id: string;
  name: string;
  duration: string;
  director: string;
}

const DIRECTORS: string[] = [
  'Robert Eggers',
  'James Ward Byrkit',
  'Quentin Tarantino',
  'Quentin Tarantino',
  'Darren Aronofsky',
  'Jordan Peele',
  'Christopher Nolan',
  'Christopher Nolan',
  'David Fincher',
  'Denis Villeneuve',
  'Denis Villeneuve',
  'Darren Aronofsky',
  'Sam Mendes',
  'Bong Joon-ho',
  'Michael Spierig, Peter Spierig',
  'Lana Wachowski, Lilly Wachowski',
  'Quentin Tarantino',
  'Quentin Tarantino',
  'David Fincher',
  'Gus Van Sant',
  'John G. Avildsen',
  'Alfred Hitchcock',
  'Lars Von Trier',
  'Pete Docter',
  'Lorcan Finnegan',
  'Dan Trachtenberg',
  'Juliano Dornelles, Kleber Mendonça Filho',
  'Alex Garland',
  'David Fincher'
];

const NAMES: string[] = [
  'The Witch',
  'Coherence',
  'Pulp Fiction',
  'Kill Bill',
  'Mother!',
  'Get Out',
  'Inception',
  'Shutter Island ',
  'Fight Club',
  'Prisoners',
  'Incendies',
  'Black Swan',
  'American Beauty',
  'Parasite',
  'Predestination',
  'Matrix',
  'Django Unchained',
  'Inglourious Basterds',
  'The Curious Case of Benjamin Button',
  'Good Will Hunting',
  'Rocky',
  'Psycho',
  'Dogville',
  'Inside Out',
  'Vivarium',
  '10 Cloverfield Lane',
  'Bacurau',
  'Ex Machina',
  'The Social Network'
];

const DURATIONS: string[] = [
  '120',
  '89',
  '154',
  '111',
  '121',
  '104',
  '148',
  '138',
  '139',
  '153',
  '130',
  '108',
  '121',
  '132',
  '97',
  '136',
  '165',
  '153',
  '166',
  '126',
  '119',
  '109',
  '178',
  '94',
  '97',
  '103',
  '131',
  '108',
  '120'

];

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const shuffledMoviesAndDirectors = NAMES.map((name, index) => ({
  name,
  director: DIRECTORS[index],
}));
shuffleArray(shuffledMoviesAndDirectors);

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})

export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'duration', 'director'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    const users = shuffledMoviesAndDirectors.map((movie, index) =>
      createNewUser(index + 1, movie.name, movie.director)
    );

    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

function createNewUser(id: number, name: string, director: string): UserData {
  const index = NAMES.indexOf(name);
  const duration = DURATIONS[index];

  return {
    id: id.toString(),
    name: name,
    duration: duration,
    director: director,
  };
}

