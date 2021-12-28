import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('mapContainer')
  private mapContainer: ElementRef | undefined;
  private map: MapboxMap | null = null;

  public ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWhqYXdvcnNraSIsImEiOiJjazk4ZWtxamwwMXJ3M21wNHlnYTgxbWZrIn0.YmOmIQjlp2c6SE9eWtHtqA';
  }

  public ngAfterViewInit(): void {
    this.map = new MapboxMap({
      container: this.mapContainer?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5.127684, 52.0809856],
      zoom: 10,
    });
  }

}
