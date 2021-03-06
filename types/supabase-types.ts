/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/opportunities": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.opportunities.id"];
          updated_at?: parameters["rowFilter.opportunities.updated_at"];
          author?: parameters["rowFilter.opportunities.author"];
          opp_deadline?: parameters["rowFilter.opportunities.opp_deadline"];
          location?: parameters["rowFilter.opportunities.location"];
          opp_name?: parameters["rowFilter.opportunities.opp_name"];
          company_name?: parameters["rowFilter.opportunities.company_name"];
          eligibility?: parameters["rowFilter.opportunities.eligibility"];
          opp_description?: parameters["rowFilter.opportunities.opp_description"];
          company_logo_url?: parameters["rowFilter.opportunities.company_logo_url"];
          apply_at?: parameters["rowFilter.opportunities.apply_at"];
          /** type of the opportunity */
          type?: parameters["rowFilter.opportunities.type"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["opportunities"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** opportunities */
          opportunities?: definitions["opportunities"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.opportunities.id"];
          updated_at?: parameters["rowFilter.opportunities.updated_at"];
          author?: parameters["rowFilter.opportunities.author"];
          opp_deadline?: parameters["rowFilter.opportunities.opp_deadline"];
          location?: parameters["rowFilter.opportunities.location"];
          opp_name?: parameters["rowFilter.opportunities.opp_name"];
          company_name?: parameters["rowFilter.opportunities.company_name"];
          eligibility?: parameters["rowFilter.opportunities.eligibility"];
          opp_description?: parameters["rowFilter.opportunities.opp_description"];
          company_logo_url?: parameters["rowFilter.opportunities.company_logo_url"];
          apply_at?: parameters["rowFilter.opportunities.apply_at"];
          /** type of the opportunity */
          type?: parameters["rowFilter.opportunities.type"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.opportunities.id"];
          updated_at?: parameters["rowFilter.opportunities.updated_at"];
          author?: parameters["rowFilter.opportunities.author"];
          opp_deadline?: parameters["rowFilter.opportunities.opp_deadline"];
          location?: parameters["rowFilter.opportunities.location"];
          opp_name?: parameters["rowFilter.opportunities.opp_name"];
          company_name?: parameters["rowFilter.opportunities.company_name"];
          eligibility?: parameters["rowFilter.opportunities.eligibility"];
          opp_description?: parameters["rowFilter.opportunities.opp_description"];
          company_logo_url?: parameters["rowFilter.opportunities.company_logo_url"];
          apply_at?: parameters["rowFilter.opportunities.apply_at"];
          /** type of the opportunity */
          type?: parameters["rowFilter.opportunities.type"];
        };
        body: {
          /** opportunities */
          opportunities?: definitions["opportunities"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          full_name?: parameters["rowFilter.profiles.full_name"];
          email?: parameters["rowFilter.profiles.email"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          full_name?: parameters["rowFilter.profiles.full_name"];
          email?: parameters["rowFilter.profiles.email"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          full_name?: parameters["rowFilter.profiles.full_name"];
          email?: parameters["rowFilter.profiles.email"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  opportunities: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    updated_at?: string;
    /**
     * Note:
     * This is a Foreign Key to `profiles.id`.<fk table='profiles' column='id'/>
     */
    author: string;
    opp_deadline: string;
    location: string;
    opp_name: string;
    company_name: string;
    eligibility?: string;
    opp_description?: string;
    company_logo_url?: string;
    apply_at: string;
    /** type of the opportunity */
    type?: string;
  };
  profiles: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    id: string;
    updated_at?: string;
    avatar_url?: string;
    full_name?: string;
    email: string;
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** opportunities */
  "body.opportunities": definitions["opportunities"];
  "rowFilter.opportunities.id": string;
  "rowFilter.opportunities.updated_at": string;
  "rowFilter.opportunities.author": string;
  "rowFilter.opportunities.opp_deadline": string;
  "rowFilter.opportunities.location": string;
  "rowFilter.opportunities.opp_name": string;
  "rowFilter.opportunities.company_name": string;
  "rowFilter.opportunities.eligibility": string;
  "rowFilter.opportunities.opp_description": string;
  "rowFilter.opportunities.company_logo_url": string;
  "rowFilter.opportunities.apply_at": string;
  /** type of the opportunity */
  "rowFilter.opportunities.type": string;
  /** profiles */
  "body.profiles": definitions["profiles"];
  "rowFilter.profiles.id": string;
  "rowFilter.profiles.updated_at": string;
  "rowFilter.profiles.avatar_url": string;
  "rowFilter.profiles.full_name": string;
  "rowFilter.profiles.email": string;
}

export interface operations {}

export interface external {}
