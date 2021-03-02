/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLogger = /* GraphQL */ `
  query GetLogger($user: AWSEmail!, $timestamp: AWSDateTime!) {
    getLogger(user: $user, timestamp: $timestamp) {
      user
      timestamp
      message
      createdAt
      updatedAt
    }
  }
`;
export const listLoggers = /* GraphQL */ `
  query ListLoggers(
    $user: AWSEmail
    $timestamp: ModelStringKeyConditionInput
    $filter: ModelLoggerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLoggers(
      user: $user
      timestamp: $timestamp
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        user
        timestamp
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDrive = /* GraphQL */ `
  query GetDrive($id: ID!) {
    getDrive(id: $id) {
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
export const listDrives = /* GraphQL */ `
  query ListDrives(
    $filter: ModelDriveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrives(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMtrac = /* GraphQL */ `
  query GetMtrac($id: ID!) {
    getMtrac(id: $id) {
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
export const listMtracs = /* GraphQL */ `
  query ListMtracs(
    $filter: ModelMtracFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMtracs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSummary = /* GraphQL */ `
  query GetSummary($id: ID!) {
    getSummary(id: $id) {
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
export const listSummarys = /* GraphQL */ `
  query ListSummarys(
    $filter: ModelSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSummarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getFuel = /* GraphQL */ `
  query GetFuel($id: ID!) {
    getFuel(id: $id) {
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
export const listFuels = /* GraphQL */ `
  query ListFuels(
    $filter: ModelFuelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFuels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($email: AWSEmail!) {
    getUser(email: $email) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: AWSEmail
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
        devices
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
