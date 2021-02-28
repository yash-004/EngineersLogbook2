/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLogger = /* GraphQL */ `
  subscription OnCreateLogger {
    onCreateLogger {
      user
      timestamp
      message
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLogger = /* GraphQL */ `
  subscription OnUpdateLogger {
    onUpdateLogger {
      user
      timestamp
      message
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLogger = /* GraphQL */ `
  subscription OnDeleteLogger {
    onDeleteLogger {
      user
      timestamp
      message
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDrive = /* GraphQL */ `
  subscription OnCreateDrive {
    onCreateDrive {
      id
      is_jit
      driver
      fleet
      commander
      vehicle
      vehicle_type
      start_time
      end_time
      start_location
      end_location
      start_odometer
      end_odometer
      fuel_level
      status
      comments
      company
      created
      date
      incamp
      is_maintenance
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDrive = /* GraphQL */ `
  subscription OnUpdateDrive {
    onUpdateDrive {
      id
      is_jit
      driver
      fleet
      commander
      vehicle
      vehicle_type
      start_time
      end_time
      start_location
      end_location
      start_odometer
      end_odometer
      fuel_level
      status
      comments
      company
      created
      date
      incamp
      is_maintenance
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDrive = /* GraphQL */ `
  subscription OnDeleteDrive {
    onDeleteDrive {
      id
      is_jit
      driver
      fleet
      commander
      vehicle
      vehicle_type
      start_time
      end_time
      start_location
      end_location
      start_odometer
      end_odometer
      fuel_level
      status
      comments
      company
      created
      date
      incamp
      is_maintenance
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMtrac = /* GraphQL */ `
  subscription OnCreateMtrac {
    onCreateMtrac {
      id
      accidentcommander
      accidentdriver
      accidentpsger
      admincommander
      admindriver
      cmdchecklistcomplete
      cmddanger
      cmdlicense
      cmdreverse
      cmdroute
      cmdspeedlimit
      commander
      commandermtrac
      company
      counterName
      counterSignature
      created
      detailType
      driver
      drivermtrac
      endLocation
      fleet
      frontName
      frontSignature
      health
      incamp
      is_jit
      licenseTyp
      loadcommander
      loaddriver
      mtraccompletecommander
      mtraccompletedriver
      psgerdange
      psgerlicense
      psgerspeedlimit
      rest
      safetyMeasures
      safetystrapcommander
      safetystrapdriver
      seatbeltcommander
      seatbletdriver
      smokingcommander
      smokingdriver
      startLocation
      status
      vc
      vehicleNumber
      vehicleServiceability
      vehicleType2
      vehicle_type
      weather
      route
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMtrac = /* GraphQL */ `
  subscription OnUpdateMtrac {
    onUpdateMtrac {
      id
      accidentcommander
      accidentdriver
      accidentpsger
      admincommander
      admindriver
      cmdchecklistcomplete
      cmddanger
      cmdlicense
      cmdreverse
      cmdroute
      cmdspeedlimit
      commander
      commandermtrac
      company
      counterName
      counterSignature
      created
      detailType
      driver
      drivermtrac
      endLocation
      fleet
      frontName
      frontSignature
      health
      incamp
      is_jit
      licenseTyp
      loadcommander
      loaddriver
      mtraccompletecommander
      mtraccompletedriver
      psgerdange
      psgerlicense
      psgerspeedlimit
      rest
      safetyMeasures
      safetystrapcommander
      safetystrapdriver
      seatbeltcommander
      seatbletdriver
      smokingcommander
      smokingdriver
      startLocation
      status
      vc
      vehicleNumber
      vehicleServiceability
      vehicleType2
      vehicle_type
      weather
      route
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMtrac = /* GraphQL */ `
  subscription OnDeleteMtrac {
    onDeleteMtrac {
      id
      accidentcommander
      accidentdriver
      accidentpsger
      admincommander
      admindriver
      cmdchecklistcomplete
      cmddanger
      cmdlicense
      cmdreverse
      cmdroute
      cmdspeedlimit
      commander
      commandermtrac
      company
      counterName
      counterSignature
      created
      detailType
      driver
      drivermtrac
      endLocation
      fleet
      frontName
      frontSignature
      health
      incamp
      is_jit
      licenseTyp
      loadcommander
      loaddriver
      mtraccompletecommander
      mtraccompletedriver
      psgerdange
      psgerlicense
      psgerspeedlimit
      rest
      safetyMeasures
      safetystrapcommander
      safetystrapdriver
      seatbeltcommander
      seatbletdriver
      smokingcommander
      smokingdriver
      startLocation
      status
      vc
      vehicleNumber
      vehicleServiceability
      vehicleType2
      vehicle_type
      weather
      route
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSummary = /* GraphQL */ `
  subscription OnCreateSummary {
    onCreateSummary {
      id
      drive_count
      mileage_km
      duration_minutes
      most_recent_drive
      most_recent_drive_by_vehicle_type
      mileage_by_vehicle_type
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSummary = /* GraphQL */ `
  subscription OnUpdateSummary {
    onUpdateSummary {
      id
      drive_count
      mileage_km
      duration_minutes
      most_recent_drive
      most_recent_drive_by_vehicle_type
      mileage_by_vehicle_type
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSummary = /* GraphQL */ `
  subscription OnDeleteSummary {
    onDeleteSummary {
      id
      drive_count
      mileage_km
      duration_minutes
      most_recent_drive
      most_recent_drive_by_vehicle_type
      mileage_by_vehicle_type
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      email
      created
      last_login
      name
      fleet
      company
      is_admin
      is_commander
      location
      admin_level
      is_driver
      licence_num
      licence_type
      mss_certified
      flb_certified
      belrex_certified
      m3g_certified
      summary {
        id
        drive_count
        mileage_km
        duration_minutes
        most_recent_drive
        most_recent_drive_by_vehicle_type
        mileage_by_vehicle_type
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      email
      created
      last_login
      name
      fleet
      company
      is_admin
      is_commander
      location
      admin_level
      is_driver
      licence_num
      licence_type
      mss_certified
      flb_certified
      belrex_certified
      m3g_certified
      summary {
        id
        drive_count
        mileage_km
        duration_minutes
        most_recent_drive
        most_recent_drive_by_vehicle_type
        mileage_by_vehicle_type
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      email
      created
      last_login
      name
      fleet
      company
      is_admin
      is_commander
      location
      admin_level
      is_driver
      licence_num
      licence_type
      mss_certified
      flb_certified
      belrex_certified
      m3g_certified
      summary {
        id
        drive_count
        mileage_km
        duration_minutes
        most_recent_drive
        most_recent_drive_by_vehicle_type
        mileage_by_vehicle_type
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
