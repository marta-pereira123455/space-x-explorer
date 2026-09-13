import { Links } from './links.model';
import { Rocket } from './rocket.model';
import { SecondStage } from './second-stage.model';

interface Fairings {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ship: string;
}

interface Telemetry {
  flight_club: string;
}

interface LaunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

interface LaunchFailureDetails {
  time: number;
  altitude: number;
  reason: string;
}

interface TimeLine {
  webcast_liftoff: number;
}

export interface Launch {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  upcoming: boolean;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: Rocket;
  second_stage: SecondStage;
  fairings: Fairings;
  ships: string[];
  telemetry: Telemetry;
  launch_site: LaunchSite;
  launch_success: boolean;
  launch_failure_details: LaunchFailureDetails;
  links: Links;
  details: string;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  timeline: TimeLine;
}
