/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLogger = /* GraphQL */ `
  mutation CreateLogger(
    $input: CreateLoggerInput!
    $condition: ModelLoggerConditionInput
  ) {
    createLogger(input: $input, condition: $condition) {
      user
      timestamp
      message
      createdAt
      updatedAt
    }
  }
`;
export const updateLogger = /* GraphQL */ `
  mutation UpdateLogger(
    $input: UpdateLoggerInput!
    $condition: ModelLoggerConditionInput
  ) {
    updateLogger(input: $input, condition: $condition) {
      user
      timestamp
      message
      createdAt
      updatedAt
    }
  }
`;
export const deleteLogger = /* GraphQL */ `
  mutation DeleteLogger(
    $input: DeleteLoggerInput!
    $condition: ModelLoggerConditionInput
  ) {
    deleteLogger(input: $input, condition: $condition) {
      user
      timestamp
      message
      createdAt
      updatedAt
    }
  }
`;
export const createDrive = /* GraphQL */ `
  mutation CreateDrive(
    $input: CreateDriveInput!
    $condition: ModelDriveConditionInput
  ) {
    createDrive(input: $input, condition: $condition) {
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
      date
      incamp
      is_maintenance
      createdAt
      updatedAt
    }
  }
`;
export const updateDrive = /* GraphQL */ `
  mutation UpdateDrive(
    $input: UpdateDriveInput!
    $condition: ModelDriveConditionInput
  ) {
    updateDrive(input: $input, condition: $condition) {
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
      date
      incamp
      is_maintenance
      createdAt
      updatedAt
    }
  }
`;
export const deleteDrive = /* GraphQL */ `
  mutation DeleteDrive(
    $input: DeleteDriveInput!
    $condition: ModelDriveConditionInput
  ) {
    deleteDrive(input: $input, condition: $condition) {
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
      date
      incamp
      is_maintenance
      createdAt
      updatedAt
    }
  }
`;
export const createMtrac = /* GraphQL */ `
  mutation CreateMtrac(
    $input: CreateMtracInput!
    $condition: ModelMtracConditionInput
  ) {
    createMtrac(input: $input, condition: $condition) {
      id
      status
      incamp
      is_jit
      driver
      commander
      fleet
      company
      vehicleNumber
      licenseType
      vehicle_type
      vehicleType2
      rest
      health
      weather
      route
      detailType
      vc
      vehicleServiceability
      startLocation
      endLocation
      counterSignature
      frontSignature
      safetyMeasures
      frontName
      counterName
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
      commandermtrac
      drivermtrac
      loadcommander
      loaddriver
      mtraccompletecommander
      mtraccompletedriver
      psgerdanger
      psgerlicense
      psgerspeedlimit
      safetystrapcommander
      safetystrapdriver
      seatbeltcommander
      seatbeltdriver
      smokingcommander
      smokingdriver
      createdAt
      updatedAt
    }
  }
`;
export const updateMtrac = /* GraphQL */ `
  mutation UpdateMtrac(
    $input: UpdateMtracInput!
    $condition: ModelMtracConditionInput
  ) {
    updateMtrac(input: $input, condition: $condition) {
      id
      status
      incamp
      is_jit
      driver
      commander
      fleet
      company
      vehicleNumber
      licenseType
      vehicle_type
      vehicleType2
      rest
      health
      weather
      route
      detailType
      vc
      vehicleServiceability
      startLocation
      endLocation
      counterSignature
      frontSignature
      safetyMeasures
      frontName
      counterName
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
      commandermtrac
      drivermtrac
      loadcommander
      loaddriver
      mtraccompletecommander
      mtraccompletedriver
      psgerdanger
      psgerlicense
      psgerspeedlimit
      safetystrapcommander
      safetystrapdriver
      seatbeltcommander
      seatbeltdriver
      smokingcommander
      smokingdriver
      createdAt
      updatedAt
    }
  }
`;
export const deleteMtrac = /* GraphQL */ `
  mutation DeleteMtrac(
    $input: DeleteMtracInput!
    $condition: ModelMtracConditionInput
  ) {
    deleteMtrac(input: $input, condition: $condition) {
      id
      status
      incamp
      is_jit
      driver
      commander
      fleet
      company
      vehicleNumber
      licenseType
      vehicle_type
      vehicleType2
      rest
      health
      weather
      route
      detailType
      vc
      vehicleServiceability
      startLocation
      endLocation
      counterSignature
      frontSignature
      safetyMeasures
      frontName
      counterName
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
      commandermtrac
      drivermtrac
      loadcommander
      loaddriver
      mtraccompletecommander
      mtraccompletedriver
      psgerdanger
      psgerlicense
      psgerspeedlimit
      safetystrapcommander
      safetystrapdriver
      seatbeltcommander
      seatbeltdriver
      smokingcommander
      smokingdriver
      createdAt
      updatedAt
    }
  }
`;
export const createSummary = /* GraphQL */ `
  mutation CreateSummary(
    $input: CreateSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    createSummary(input: $input, condition: $condition) {
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
export const updateSummary = /* GraphQL */ `
  mutation UpdateSummary(
    $input: UpdateSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    updateSummary(input: $input, condition: $condition) {
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
export const deleteSummary = /* GraphQL */ `
  mutation DeleteSummary(
    $input: DeleteSummaryInput!
    $condition: ModelSummaryConditionInput
  ) {
    deleteSummary(input: $input, condition: $condition) {
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
export const createFuel = /* GraphQL */ `
  mutation CreateFuel(
    $input: CreateFuelInput!
    $condition: ModelFuelConditionInput
  ) {
    createFuel(input: $input, condition: $condition) {
      id
      driver
      vehicle
      vehicle_type
      date
      time
      location
      fuelTopUp
      fleet
      company
      createdAt
      updatedAt
    }
  }
`;
export const updateFuel = /* GraphQL */ `
  mutation UpdateFuel(
    $input: UpdateFuelInput!
    $condition: ModelFuelConditionInput
  ) {
    updateFuel(input: $input, condition: $condition) {
      id
      driver
      vehicle
      vehicle_type
      date
      time
      location
      fuelTopUp
      fleet
      company
      createdAt
      updatedAt
    }
  }
`;
export const deleteFuel = /* GraphQL */ `
  mutation DeleteFuel(
    $input: DeleteFuelInput!
    $condition: ModelFuelConditionInput
  ) {
    deleteFuel(input: $input, condition: $condition) {
      id
      driver
      vehicle
      vehicle_type
      date
      time
      location
      fuelTopUp
      fleet
      company
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      email
      last_login
      name
      fleet
      company
      is_admin
      is_commander
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
      devices
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      email
      last_login
      name
      fleet
      company
      is_admin
      is_commander
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
      devices
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      email
      last_login
      name
      fleet
      company
      is_admin
      is_commander
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
      devices
      createdAt
      updatedAt
    }
  }
`;
