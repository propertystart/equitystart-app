export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      tblborrowers: {
        Row: {
          annual_salary: number | null
          application_id: string | null
          application_type: string | null
          applying_with: string | null
          bank_loan_amount: number | null
          bank_name: string | null
          borrower_id: string | null
          contribution: number | null
          created_at: string
          current_address: string | null
          current_living: string | null
          education: string | null
          email: string | null
          employment_duration: string | null
          employment_status: string | null
          id: number
          identification_documents: string[] | null
          loan_term: number | null
          mobile: string | null
          monthly_income: number | null
          name: string | null
          occupation: string | null
          partner_annual_salary: number | null
          partner_education: string | null
          partner_employment_status: string | null
          partner_monthly_income: number | null
          partner_name: string | null
          partner_occupation: string | null
          preferred_suburb: string | null
          property_address: string | null
          property_value: number | null
          relationship: string | null
          required_equity_start_loan: number | null
          sale_type: string | null
          secondary_documents: string[] | null
          status: string | null
          submitted_at: string | null
          total_expenses: number | null
          user_id: string | null
        }
        Insert: {
          annual_salary?: number | null
          application_id?: string | null
          application_type?: string | null
          applying_with?: string | null
          bank_loan_amount?: number | null
          bank_name?: string | null
          borrower_id?: string | null
          contribution?: number | null
          created_at?: string
          current_address?: string | null
          current_living?: string | null
          education?: string | null
          email?: string | null
          employment_duration?: string | null
          employment_status?: string | null
          id?: number
          identification_documents?: string[] | null
          loan_term?: number | null
          mobile?: string | null
          monthly_income?: number | null
          name?: string | null
          occupation?: string | null
          partner_annual_salary?: number | null
          partner_education?: string | null
          partner_employment_status?: string | null
          partner_monthly_income?: number | null
          partner_name?: string | null
          partner_occupation?: string | null
          preferred_suburb?: string | null
          property_address?: string | null
          property_value?: number | null
          relationship?: string | null
          required_equity_start_loan?: number | null
          sale_type?: string | null
          secondary_documents?: string[] | null
          status?: string | null
          submitted_at?: string | null
          total_expenses?: number | null
          user_id?: string | null
        }
        Update: {
          annual_salary?: number | null
          application_id?: string | null
          application_type?: string | null
          applying_with?: string | null
          bank_loan_amount?: number | null
          bank_name?: string | null
          borrower_id?: string | null
          contribution?: number | null
          created_at?: string
          current_address?: string | null
          current_living?: string | null
          education?: string | null
          email?: string | null
          employment_duration?: string | null
          employment_status?: string | null
          id?: number
          identification_documents?: string[] | null
          loan_term?: number | null
          mobile?: string | null
          monthly_income?: number | null
          name?: string | null
          occupation?: string | null
          partner_annual_salary?: number | null
          partner_education?: string | null
          partner_employment_status?: string | null
          partner_monthly_income?: number | null
          partner_name?: string | null
          partner_occupation?: string | null
          preferred_suburb?: string | null
          property_address?: string | null
          property_value?: number | null
          relationship?: string | null
          required_equity_start_loan?: number | null
          sale_type?: string | null
          secondary_documents?: string[] | null
          status?: string | null
          submitted_at?: string | null
          total_expenses?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      tblinvestors: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      tblusers: {
        Row: {
          created_at: string
          id: number
          last_login: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          last_login?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          last_login?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
