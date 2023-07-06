class DoctorsController < ApplicationController
    def create
        admin = Doctor.find_by(name: params[:name])
        if admin&.authenticate(params[:password])
          #session[:patient_id] = patient.id
          render json: admin, status: :created
        else
          render json: { error: "Invalid email or password" }, status: :unauthorized
        end
    end
end
